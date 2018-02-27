import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name:'myPipe'
})
export class MyPipe implements PipeTransform{
  transform(value:string, count:number = 3, char:string = '*'){
    return char.repeat(count) + value;
  }
}