import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";



const modules = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...modules

  ],
   exports:modules
})
export class MaterialModule { }
