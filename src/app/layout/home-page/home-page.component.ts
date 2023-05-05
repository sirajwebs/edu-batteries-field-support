import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// import { BatteryData } from '../../shared/services/weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();

  constructor(
    private router: Router,
    // private BatteryData: BatteryData,
  ) { }

  ngOnInit(): void {
    // this.addSearchedCity();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  // private addSearchedCity(): void {
  //   this.subscriptions.add(
  //     this.BatteryData.getSearchedCity().subscribe((city) => {
  //       if (!city || this.cityIndex(city) > -1) {
  //         return;
  //       }
  //       this.cities.push(city);
  //     }),
  //   );
  // }

  // private cityIndex(city: string): number {
  //   return this.cities.map(v => v.toLowerCase()).indexOf(city.toLowerCase());
  // }
}
