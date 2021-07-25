import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailsComponent} from "./hero-details/hero-details.component"
import {AuthGuard} from "../auth.guard";
import {ConfirmGuard} from "../confirm.guard";
import {HeroDetailsResolverService} from "../hero-details-resolver.service"


const routes: Routes = [
  {path:"heroes", component:HeroListComponent},
  {path:"hero/:id", component:HeroDetailsComponent, canActivate:[AuthGuard], canDeactivate:[ConfirmGuard], resolve:{hero:HeroDetailsResolverService}},
  {path:"", redirectTo:'/heroes',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
