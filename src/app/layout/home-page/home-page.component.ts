import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BatteryData } from './../../shared/models/battery-data.model';
import { BatteryDataService } from './../../shared/services/battery-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  batteryData: BatteryData[] = [];

  constructor(
    private batteryDataService: BatteryDataService,
  ) { }

  ngOnInit(): void {
    this.getBatteryData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private getBatteryData(): void {
    this.subscriptions.add(
      this.batteryDataService.getBatteryData().subscribe((data) => {
       this.batteryData = data;
      }),
    );
  }
}
