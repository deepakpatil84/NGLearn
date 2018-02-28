import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
  selector: 'child',
  templateUrl: 'child.html'  
})
export class Child {
  @Input()
  private value = 'test';

  @Output()
  private valueChange: EventEmitter<string> = new EventEmitter();

  private handleClick(){
    this.valueChange.next(this.value)
    this.value = 'test';
  }
  public setValue(text:string){
    console.log('text',text);
    this.value = text;
  }
}