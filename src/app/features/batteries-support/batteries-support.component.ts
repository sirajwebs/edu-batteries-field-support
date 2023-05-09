import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BatteryData, BatteryDataExt } from './../../shared/models/battery-data.model';
import { HelperService } from './../../shared/services/helper.service';

@Component({
  selector: 'app-batteries-support',
  templateUrl: './batteries-support.component.html',
  styleUrls: ['./batteries-support.component.scss']
})
export class BatteriesSupportComponent {
  @Input() batteryDataByAcademyId: BatteryData[][] = [];
  @Output() deviceDataByDateWithAverage: EventEmitter<BatteryDataExt[][]> = new EventEmitter();

  constructor(
    private helperService: HelperService,
  ) { }

  getSerialNumber(deviceData: BatteryData[]): string {
    return deviceData[0].serialNumber;
  }

  getAverageBattery(deviceData: BatteryData[]): BatteryDataExt[][] {
    /**
     * intervals weighted by duration of 24 hours from 12AM to 11.59PM for each day
     */
    const deviceDataExt: BatteryDataExt[] = [...deviceData]
    this.sortByDateTime(deviceDataExt).map(item => {
      item['date'] = item.timestamp.split('T')[0];
      return item;
    });
    const deviceDataByDate: BatteryDataExt[][] = this.helperService.groupArrayByObject(deviceDataExt, 'date');
    let totalUsagePerWeek = 0;
    let dayIndex = 0;

    deviceDataByDate.forEach(dataByDate => {
      let totalUsagePerDay = 0;
      for (let index = 0; index < dataByDate.length; index++) {
        const usage = dataByDate[index].batteryLevel - dataByDate[index + 1]?.batteryLevel;
        const batteryUsage = usage > 0 ? usage : 0;

        totalUsagePerDay += batteryUsage;
      }

      totalUsagePerDay = totalUsagePerDay * this.getDayMultiplier(dataByDate);
      deviceDataByDate[dayIndex][0].batteryAveragePerDay = totalUsagePerDay;
      totalUsagePerWeek += totalUsagePerDay;

      dayIndex++;
    });

    deviceDataByDate[0][0].batteryAveragePerWeek = totalUsagePerWeek / dayIndex;
    this.deviceDataByDateWithAverage.emit(deviceDataByDate);

    return deviceDataByDate;
  }

  batteryNeedsReplacement(percentData: number | undefined): string {
    if (percentData === undefined) {
      return '';
    } else if (percentData < 0.3) {
      return '';
    } else {
      return '*** Replace Battery';
    }
  }

  private getDayMultiplier(dataByDate: BatteryDataExt[]): number {
    /**
     * if total calulated time interval is less than 12 hours then multiply the average battery usage by 2 for 24 hours
     */
    const date1 = new Date(dataByDate[0].timestamp).getTime();
    const date2 = new Date(dataByDate[dataByDate.length - 1].timestamp).getTime();
    const diff = Math.abs(date1 - date2) / 3600000;

    if (diff <= 12) { return 2 }
    return 1;
  }

  private sortByDateTime(deviceData: BatteryDataExt[]): BatteryDataExt[] {
    deviceData.sort(function (a, b) {
      return (new Date(a.timestamp)).getTime() - (new Date(b.timestamp)).getTime();
    });
    return deviceData;
  }
}
