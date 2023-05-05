import { Component, Input } from '@angular/core';
import { BatteryData } from './../../shared/models/battery-data.model';

@Component({
  selector: 'app-batteries-support',
  templateUrl: './batteries-support.component.html',
  styleUrls: ['./batteries-support.component.scss']
})
export class BatteriesSupportComponent {
@Input() batteryData: BatteryData[] = [];
}
