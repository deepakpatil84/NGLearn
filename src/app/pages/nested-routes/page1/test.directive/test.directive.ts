import {Directive, Input, TemplateRef, ViewContainerRef, HostListener, ElementRef} from '@angular/core';
@Directive({selector:'[appTest]'})
export class TestDirective{
  @Input('appTest') color:string;
  constructor(private el:ElementRef){}
  @HostListener('mouseenter') onMouseEnter(){    
    this.el.nativeElement.style.backgroundColor = this.color;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
  }
}