import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Hero } from '../hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  hero:Hero;
  constructor(private route:ActivatedRoute, private heroService:HeroService) { }

  ngOnInit(): void {
    //this.getHeroObs();
  }

  private getHeroObs(){
    this.route.paramMap.pipe(
      switchMap((param:ParamMap)=>{
        console.log(param);
        const id = +param.get('id');
        return this.heroService.getHero(id);

      })
    ).subscribe(hero=>this.hero = hero)
  }

}
