import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeroesModule} from "./heroes/heroes.module";
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {  HttpClientModule } from '@angular/common/http';
import {DataService} from "./data.service"
import {AboutModule} from "./about/about.module";
import {LoginModule} from "./login/login.module";




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    AboutModule,
    LoginModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
