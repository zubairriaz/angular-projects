import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import {HttpClientModule} from "@angular/common/http";
import { TempConversionPipe } from './pipes/temp-conversion.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './app/material.module'
import {FlexLayoutModule} from "@angular/flex-layout";
import { CitySearchComponent } from './city-search/city-search.component'
import {FormsModule , ReactiveFormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    TempConversionPipe,
    CitySearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
