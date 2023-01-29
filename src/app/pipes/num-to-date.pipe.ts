import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numToDate'
})
export class NumToDatePipe implements PipeTransform {

  transform(num: number): string {
    return new Date(num).toLocaleDateString("ru-RU");
  }

}
