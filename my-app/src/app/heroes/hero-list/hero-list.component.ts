import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero/hero.model';
import { HeroService } from '../hero.service';
import {Subject} from "rxjs";
import {map, takeUntil} from "rxjs/operators"

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  private heroSub = new Subject();
  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeros().pipe(
      map(heroes => this.heroes = heroes),
      takeUntil(this.heroSub)
    ).subscribe();
  }

  ngOnDestroy() {

    this.heroSub.next();
  
    this.heroSub.complete();
  
  }

  rename(hero: Hero) {
    const existingHero = { id: hero.id, name: 'Pricezog', team:"D" };

    this.heroService.editHero(hero.id, existingHero).subscribe(() => {
      this.heroes.find(hero => hero.id == existingHero.id).name = 'Pricezog';
    });
  }
  deleteHero(hero:Hero){
    this.heroService.deleteHero(hero.id);
  }

  addHero(name:string){
    let obj = {name:name, id:this.heroes.length + 1 , team:"Dummy"}
    this.heroService.createHero(obj).subscribe(hero=>this.heroes.push(hero))
  }
}
