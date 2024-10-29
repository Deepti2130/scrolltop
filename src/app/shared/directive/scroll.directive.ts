import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }


  @HostListener('click') onclick(){

    window.scrollTo(
      {
        top : 0,
        behavior:'smooth'

      }
    )
  }
}
