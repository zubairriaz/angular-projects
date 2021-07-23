import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCopyRight]'
})
export class CopyRightDirective {

  constructor(el:ElementRef, renderer:Renderer2) {
    renderer.addClass(el.nativeElement, "copyright");
    renderer.setProperty(el.nativeElement,'textContent',`copyright ${new Date().getFullYear()} All Rights reserved`)
   }

}
