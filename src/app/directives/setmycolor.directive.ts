import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[setmycolor]'
})
export class SetmycolorDirective {

@Input('setmycolor')  myfcolor:string; 

@Input('lcolor') mylcolor:string; 


  constructor(private element:ElementRef) { 

  element.nativeElement.style.color = 'yellow';

}

@HostListener ('mouseenter') setColorMouseEnter(){
  this.setColor(this.myfcolor)
}

@HostListener ('mouseleave') setColorMouseLeave(){
  this.setColor(this.mylcolor)
}

private setColor(color:string){
  this.element.nativeElement.style.color = color;
}


}