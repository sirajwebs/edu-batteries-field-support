import { Component, Input, OnInit } from '@angular/core';
import { BatteryData, BatteryDataExt } from './../../shared/models/battery-data.model';
import { HelperService } from './../../shared/services/helper.service';

@Component({
  selector: 'app-batteries-support',
  templateUrl: './batteries-support.component.html',
  styleUrls: ['./batteries-support.component.scss']
})
export class BatteriesSupportComponent implements OnInit {
  @Input() batteryDataByAcademyId: BatteryData[][] = [];

  constructor(
    private helperService: HelperService,
  ) { }

  ngOnInit(): void {
    // console.log(this.batteryDataByAcademyId);
  }

  getSerialNumber(deviceData: BatteryData[]): string {
    return deviceData[0].serialNumber;
  }

  getAverageBattery(deviceData: BatteryData[]): BatteryDataExt[][] {
    const deviceDataExt: BatteryDataExt[] = [...deviceData]
    this.sortByDateTime(deviceDataExt).map(item => {
      item['date'] = item.timestamp.split('T')[0];
      return item;
    });;
    const deviceDataByDate: BatteryDataExt[][] = this.helperService.groupArrayByObject(deviceDataExt, 'date');

    deviceDataByDate.forEach(dataByDate => {
      dataByDate.forEach(data => {
        data.batteryAverage = dataByDate[0].batteryLevel - dataByDate[dataByDate.length - 1].batteryLevel;
      });
    });

    // console.log(deviceDataByDate);

    return deviceDataByDate;
  }

  sortByDateTime(deviceData: BatteryDataExt[]): BatteryDataExt[] {
    deviceData.sort(function (a, b) {
      return (new Date(a.timestamp)).getTime() - (new Date(b.timestamp)).getTime();
    });
    return deviceData;
  }
}
