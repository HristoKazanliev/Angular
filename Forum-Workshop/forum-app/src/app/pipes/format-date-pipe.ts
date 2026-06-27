import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string | Date): string {
    if (!value) {
      return '';
    }

    const date = new Date(value);
    
    const day = date.getDate().toString().padStart(2,'0');
    const month = date.getDate().toString().padStart(2,'0');
    //show date as October 
    //const month = date.toLocaleString('en-GB', { month: 'long'});
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2,'0');;
    const minutes = date.getMinutes().toString().padStart(2,'0');;
    const seconds = date.getSeconds().toString().padStart(2,'0');;

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  }
}
