import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountryInfoService } from './country-info.service';

@Component({
  selector: 'app-zy-info-card',
  standalone: true,
  templateUrl: './zy-info-card.component.html',
  styleUrls: ['./zy-info-card.component.css']
})

export class ZyInfoCardComponent implements OnInit, OnDestroy {
  countryInfo: any = {};
  private unsubscribe$ = new Subject<void>();

  constructor(private countryInfoService: CountryInfoService) { }

  ngOnInit(): void {
    this.countryInfoService.getCountryInfo('countryCode')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(countryInfo => {
        this.countryInfo = countryInfo;
      });
  }

  //clean subscription
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
