import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testpipe'
})
export class TestpipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
