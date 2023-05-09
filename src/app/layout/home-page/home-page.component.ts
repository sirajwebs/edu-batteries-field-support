import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BatteryData, BatteryDataExt } from './../../shared/models/battery-data.model';
import { BatteryDataService } from './../../shared/services/battery-data.service';
import { HelperService } from './../../shared/services/helper.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  deviceDataByDateWithAverage: BatteryDataExt[][] = [];
  batteryDataBySerialNumber: BatteryData[][][] = [];

  constructor(
    private batteryDataService: BatteryDataService,
    private helperService: HelperService,
  ) { }

  ngOnInit(): void {
    this.getBatteryData();
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getAcademyId(academyData: BatteryData[][]): number {
    return academyData[0][0].academyId;
  }

  getDeviceDataByDateWithAverage(data: BatteryDataExt[][]): void {
    this.deviceDataByDateWithAverage = data;
  }

  private getBatteryData(): void {
    this.subscriptions.add(
      this.batteryDataService.getBatteryData().subscribe((data) => {
        const batteryDataByAcademyId = this.helperService.groupArrayByObject(data, 'academyId');

        batteryDataByAcademyId.forEach(element => {
          this.batteryDataBySerialNumber.push(this.helperService.groupArrayByObject(element, 'serialNumber'));
        });
      }),
    );
  }
}
