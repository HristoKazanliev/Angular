import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceTitle',
})
export class SliceTitlePipe implements PipeTransform {
  transform(value: string, maxLength = 30): string {
    if (!value) return '';

    if (value.length <= maxLength) {
      return value;
    }

    return value.slice(0, maxLength) + '...';
  }
}
