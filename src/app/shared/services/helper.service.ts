import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  groupArrayByObject(array: any[], key: string): Array<any[]> {

    const result =
      array.reduce((accumulator, currentValue) => {
        if (!accumulator[currentValue[key]]) {
          accumulator[currentValue[key]] = [];
        }

        accumulator[currentValue[key]].push(currentValue);
        return accumulator;
      }, {});

    return Object.values(result);
  }
}
