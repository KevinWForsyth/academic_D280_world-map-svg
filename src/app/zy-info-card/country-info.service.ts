import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// API from api.worldbank.org credit WorldBank.org
export class CountryInfoService {
  private baseUrl = 'https://api.worldbank.org/v2/country/';
  private countryInfoSubject = new BehaviorSubject<any>(null);

  constructor(private http: HttpClient) { }

  // Get country information from API
  getCountryInfo(countryCode: string): Observable<any> {
    const url = `${this.baseUrl}${countryCode}?format=json`;
    this.http.get(url).subscribe({
      next: (data: any) => {
        if (data && data[1] && data[1].length > 0) {
          const countryData = data[1][0];
          this.countryInfoSubject.next({
            name: countryData.name,
            capital: countryData.capitalCity,
            region: countryData.region.value,
            income: countryData.incomeLevel.value,
            longitude: countryData.longitude,
            latitude: countryData.latitude
          });
        }
      },
      error: (error) => {
        console.error('Error fetching country info:', error);
      }
    });
    return this.countryInfoSubject.asObservable();
  }
}
