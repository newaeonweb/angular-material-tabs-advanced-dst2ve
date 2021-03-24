import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackOrder'
})
export class TrackOrderPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort((a, b) => (a.trackNumber > b.trackNumber) ? 1 : -1);
  }

}