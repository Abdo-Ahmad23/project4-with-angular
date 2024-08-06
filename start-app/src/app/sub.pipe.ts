import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sub'
})
export class SubPipe implements PipeTransform {

  transform(value: string,numOfChar?:number): string {
    numOfChar=numOfChar?numOfChar:2;
    return value.substring(0,numOfChar);
  }

}
