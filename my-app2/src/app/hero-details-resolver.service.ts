import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { Hero } from './heroes/hero.model';
import { HeroService } from './heroes/hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailsResolverService implements Resolve<Hero> {

  constructor(private hero: HeroService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Hero>{
    const id = +route.paramMap.get("id");
    return this.hero.getHero(id).pipe(
      take(1),
      mergeMap(hero=>of(hero))
    )
  }
 
}
