import { Component, Input, OnInit } from '@angular/core';
import { BatteryData } from './../../shared/models/battery-data.model';

@Component({
  selector: 'app-batteries-support',
  templateUrl: './batteries-support.component.html',
  styleUrls: ['./batteries-support.component.scss']
})
export class BatteriesSupportComponent implements OnInit {
  @Input() batteryData: BatteryData[] = [];

  ngOnInit(): void {
    // const resArr: BatteryData[] = [];

    // console.log(resArr, this.batteryData)


    // this.batteryData.filter(item => {
    //   const i = resArr.findIndex(x => (x.serialNumber === item.serialNumber));
    //   if (i <= -1) {
    //     resArr.push(item);
    //     console.log('abcd ',resArr, this.batteryData)

    //   }

    //   return null;
    // });
    // console.log(resArr, this.batteryData)

  }
}
