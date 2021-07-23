import { Component, Input, OnInit ,Output, EventEmitter,OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import {Hero} from "./hero.model"
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HeroComponent implements OnInit, OnChanges {

  heros:Hero[] = [
    {id:1,name:"heroz",team:"team1"},
    {id:2,name:"heroa",team:"team2"},
    {id:3,name:"heroc",team:"team3"},
    {id:4,name:"herof",team:"team4"},
    {id:5,name:"herod",team:"team5"}


  ]

  constructor() {}
  @Input() name: string;
  @Output() liked = new EventEmitter();
  ngOnInit(): void {}
  ngOnChanges(changes:SimpleChanges):void{
        let changeObj = changes["name"];
        if(!changeObj.isFirstChange()){
          console.log(`Value changes from ${changeObj.previousValue} to ${changeObj.currentValue}`)
        }
  }

  trackByHeroes(index:number, hero:Hero):number{
       return hero.id
  }
}
