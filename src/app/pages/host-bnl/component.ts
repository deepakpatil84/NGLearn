
import {Component,HostListener,HostBinding} from '@angular/core';

@Component({
  selector: 'div.host-bnl',
  templateUrl: './component.html'  
})
export class HostBNLComponent {
  constructor(){
    console.log('Host BNL Component Created');
  }
  @HostBinding('style.backgroundColor') color = 'red'; 
  @HostListener('click') onClick() {
   this.color= this.color=='red'?'green':'red';
  }
}
