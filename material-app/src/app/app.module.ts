import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonToggleModule} from "@angular/material/button-toggle"
import {MatFormField} from "@angular/material/form-field"
import {MatInput} from "@angular/material/input"




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormField,
    MatInput
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
