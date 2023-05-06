import { Component, Input, OnInit } from '@angular/core';
import { BatteryData } from './../../shared/models/battery-data.model';

@Component({
  selector: 'app-batteries-support',
  templateUrl: './batteries-support.component.html',
  styleUrls: ['./batteries-support.component.scss']
})
export class BatteriesSupportComponent implements OnInit {
  @Input() batteryDataByAcademyId: BatteryData[][] = [];

  ngOnInit(): void {
    console.log(this.batteryDataByAcademyId);
  }

  getSerialNumber(deviceData: BatteryData[]): string {
    return deviceData[0].serialNumber;
  }
}
