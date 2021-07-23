import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import {Hero} from "../hero/hero.model";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FavouriteHeroService extends HeroService {
  heroes:Hero[]
  constructor(httpClient:HttpClient) {
    super(httpClient);
   }

   getHerosS():Hero[]{
     console.log("this gets called")
      let obsHeroes = super.getHeros();
      obsHeroes.subscribe(heroes=>this.heroes = heroes);
      return this.heroes;
   }
}
