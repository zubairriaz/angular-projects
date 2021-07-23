import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeros().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
