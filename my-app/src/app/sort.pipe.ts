import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from './hero/hero.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Hero[], name:string): Hero[] {
    if(value){
       return value.sort((a,b)=>a.name.localeCompare(b.name));

    }
    return []
  }

}
