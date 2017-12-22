import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'page1',
  templateUrl: 'page1.html'  
})
export class Page1 {
  private inputValue = 'test1';  
  private inputValue2 = 'test2';  
  private onValueChange(value:string){
    this.inputValue=value;
  }
}