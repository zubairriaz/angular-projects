import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../hero/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient) {}
  heros: Hero[];
  heroUrl = 'api/heroes';
  getHeros(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroUrl);
  }

   async getHero(id: number): Hero | null {
    let p = this.getHeros().toPromise();
    this.heros =  await p ;
    console.log(this.heros);
    let heroFilteredheros = this.heros
      ? this.heros.filter((hero) => hero.id == id)
      : [];
    if (heroFilteredheros.length > 0) {
      return heroFilteredheros[0];
    } else {
      return null;
    }
  }

  async getHerosPromise(){
    return this.getHeros().toPromise();
  }

  getHerosS(): Hero[] {
    return [];
  }
}
