
import {Component} from '@angular/core';

@Component({
  selector: 'div.forms-compo',
  templateUrl: './forms.component.html'  
})
export class FormsComponent{
  private model = {
    name: 'test'
  }
  constructor(){
    console.log('Host BNL Component Created');
  } 
}
