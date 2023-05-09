import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BatteryData } from './../models/battery-data.model';

@Injectable({
  providedIn: 'root'
})
export class BatteryDataService {
  constructor(private http: HttpClient) { }

  getBatteryData(): Observable<BatteryData[]> {
    return this.http.get<BatteryData[]>('../../../assets/battery-data.json');
  }
}
