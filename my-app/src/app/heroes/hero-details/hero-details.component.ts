import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/hero/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero:Hero;
  @Input() id: number;
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.hero=this.heroService.getHero(this.id);
  }

}
