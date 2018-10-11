import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toShortDate'
})
export class ToShortDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    console.log(value);

    if (value = 'asap') {
      return 'Dès que possible';
    } else if (value.indexOf('-') > -1) {
      let fullDate, rest;
      [fullDate, rest] = value.toLowerCase().split('t'); // 2018-10-11T12:45:30

      let year, month, day;
      [year, month, day] = fullDate.split('-');
      return `${year}/${month}/${day}`;
    }

    return '';
  }
}

