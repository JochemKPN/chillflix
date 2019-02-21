import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bilionDollars'
})
export class BilionDollarsPipe implements PipeTransform {

  transform(value: number, args?: any): string | number {
    if (value > 1000000000) {
      return value / 1000000000 +' B';
    } else {
      return value;
    }
    }
  }

  @Pipe({
      name: 'billionDollars'
  })
  export class BillionDollarsPipe implements PipeTransform {
      transform(value: number, args?: any): string {
          return value >= 1000000000 ? `$ ${value / 1000000000} billion dollars` : value.toString();
      }
  }