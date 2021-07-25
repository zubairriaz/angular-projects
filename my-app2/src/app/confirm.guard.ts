import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { HeroDetailsComponent } from './heroes/hero-details/hero-details.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanDeactivate<HeroDetailsComponent> {
  canDeactivate(
    component: HeroDetailsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.showConfirm();
  }

  private showConfirm(){
     const confirmation = window.confirm("Are you sure you want to leave ?");
     return of(confirmation);
  }
  
}
