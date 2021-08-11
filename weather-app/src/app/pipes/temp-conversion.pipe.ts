import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConversion'
})
export class TempConversionPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    let returnedResult:number;
     if(args[0].toLowerCase() == "celcius"){
         returnedResult = +value - 273.15
     }
     return returnedResult
  }

}
