import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Hero } from '../hero/hero.model';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private httpClient: HttpClient) {}
  heros: Hero[];
  
  heroUrl = 'api/heroes';
  getHeros(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.heroUrl).pipe(
      retry(2),
      catchError((error:HttpErrorResponse)=>{
           return throwError(error);
      })
    );
  }

  async getHero(id: number): Promise<Hero> | null {
    let p = await this.getHeros().toPromise();
    if (p && p.length > 0) {
      let h = p.filter((hero) => hero.id == id)[0];
      return new Promise((res) => res(h));
    }

    return null;
  }

  createHero(hero: Hero) {
    return this.httpClient.post<Hero>(this.heroUrl, hero);
  }

  editHero(id: number, hero: Hero): Observable<any> {
    return this.httpClient.put<Hero>(this.heroUrl + id, hero);
  }

  deleteHero(id: number): Observable<any> {
    return this.httpClient.delete(this.heroUrl + id);
  }

  getHerosS(): Hero[] {
    return [];
  }
}
