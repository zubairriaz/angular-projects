import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import {MatButtonToggleModule} from "@angular/material/button-toggle"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import {MatAutocompleteModule} from "@angular/material/autocomplete"
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CheckboxComponent } from './checkbox/checkbox.component'
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDatepickerModule} from "@angular/material/datepicker"
import {MatNativeDateModule} from "@angular/material/core";
import { SizeComponent } from './size/size.component';
import { HighlightDirective } from './highlight.directive'




@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    SizeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
