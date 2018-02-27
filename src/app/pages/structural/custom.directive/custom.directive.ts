import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core'
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
@Directive({
  selector:"[appCustomDirective]"  
})
export class AppCustomDirective{
  private hasView = false;
  constructor(private template:TemplateRef<any>, private container:ViewContainerRef){}

  @Input('appCustomDirective') set value(condition:boolean){
    if(condition && !this.hasView){        
        this.container.createEmbeddedView(this.template);
        this.hasView = true;
    }else if(this.hasView){
        this.container.clear();
        this.hasView = false;      
    }
  }

}

