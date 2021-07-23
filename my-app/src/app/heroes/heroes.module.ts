import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { FavouriteHeroComponent } from './favourite-hero/favourite-hero.component';



@NgModule({
  declarations: [HeroListComponent, HeroDetailsComponent, FavouriteHeroComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeroListComponent
  ]
})
export class HeroesModule { }
