import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import { Child } from './child';
@Component({
  selector: 'page1',
  templateUrl: 'page1.html'  
})
export class Page1 {
  @ViewChild(Child) child: Child;
  private inputValue = 'test1';  
  private inputValue2 = 'test2';  
  private onValueChange(value:string){
    this.inputValue=value;    
  }
  private setValue(){
    console.log('set value parent');
    this.child.setValue(''+Math.random());
  }
}