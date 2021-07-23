import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SortPipe } from './sort.pipe';
import { CopyRightDirective } from './directives/copy-right.directive';
import { NumericDirective } from './directives/numeric.directive';
import { PermissionDirective } from './permission.directive';
import { HeroesModule } from '../app/heroes/heroes.module';
import { KeyLoggerComponent } from './key-logger/key-logger.component';
import { DataServiceService } from './data-service.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor} from "./auth.interceptor"

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SortPipe,
    CopyRightDirective,
    NumericDirective,
    PermissionDirective,
    KeyLoggerComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataServiceService),
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor ,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
