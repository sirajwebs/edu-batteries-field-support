import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  groupArrayByObject(array: any[], key: string, mapByObject = false) {

    const result =
      array.reduce((accumulator, currentValue) => {
        if (!accumulator[currentValue[key]]) {
          accumulator[currentValue[key]] = [];
        }

        accumulator[currentValue[key]].push(currentValue);
        return accumulator;
      }, {});

    return mapByObject ? result : Object.values(result);
  }
}
