import { Component, Host, OnInit, Self } from '@angular/core';
import { Hero } from 'src/app/hero/hero.model';
import { HeroService } from '../hero.service';
import {FavouriteHeroService} from "../favourite-hero.service"

@Component({
  selector: 'app-favourite-hero',
  templateUrl: './favourite-hero.component.html',
  styleUrls: ['./favourite-hero.component.css'],
  providers: [{provide:HeroService, useClass:FavouriteHeroService}]
})
export class FavouriteHeroComponent implements OnInit {
  heroes:Hero[]
  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.heroes = this.heroService.getHerosS();
  }

}
