import { animate, AnimationBuilder, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css'],
  animations:[trigger("sizeAnimation",[
    state("small",style({
      transform:"scale(1)",
      backgroundColor:'green'
    })),
    state("large",style({
      transform:"scale(2.4)",
      backgroundColor:"blue"
    })),
    transition("small=>large",animate("100ms ease-in")),
    transition("large=>small",animate("100ms ease-out"))

  ])]
})
export class SizeComponent implements OnInit {
  state = ""
  constructor(private builder:AnimationBuilder, private el :ElementRef) { }

  ngOnInit(): void {
   const factory =  this.builder.build([
      style({width:'0px'}),
      animate(1000, style({width:'200p'}))
    ])

    const textEl = this.el.nativeElement.querySelector(".text");
    const player = factory.create(textEl);
    player.play();

  }
  
  
}
