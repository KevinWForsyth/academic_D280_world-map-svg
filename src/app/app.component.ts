import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZySvgMapComponent } from './zy-svg-map/zy-svg-map.component';
import { ZyInfoCardComponent } from './zy-info-card/zy-info-card.component';
import { CountryInfoService } from './zy-info-card/country-info.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZySvgMapComponent, ZyInfoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  constructor(private countryInfoService: CountryInfoService) { }
  
  // Event handler country hovered
  onCountryHovered(countryCode: string) {
    // getCountryDetails from hovered countryCode
    this.getCountryDetails(countryCode);
  }

  // Get country details
  private getCountryDetails(countryCode: string) {
    // Call service to get country details
    this.countryInfoService.getCountryInfo(countryCode).subscribe(
      (data: any[]) => { /*Placeholder for future pages.*/ },
      (error) => {
        console.error('Error fetching country info:', error);
      }
    );
  }
}