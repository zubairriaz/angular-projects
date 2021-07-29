import { animate, AnimationBuilder, style } from '@angular/animations';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private aB:AnimationBuilder, private eR:ElementRef) { }

  ngOnInit(){
    const factory =  this.aB.build([
      style({width:'0px'}),
      animate(1000, style({width:'200p'}))
    ])

    const textEl = this.eR.nativeElement;
    const player = factory.create(textEl);
    player.play();
  }

}
