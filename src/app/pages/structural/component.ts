import { Component } from '@angular/core';
@Component({
  selector:'structural',
  templateUrl:'./component.html'
})
export default class Structural{
    private show: boolean = true;
    private items = [{title:'one'},{title:'two'},{title:'three'},{title:'four'}]
    private toggle(){
      this.show = !this.show;
    }
}