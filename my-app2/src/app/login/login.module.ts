import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginTFormComponent } from './login-tform/login-tform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';



@NgModule({
  declarations: [LoginTFormComponent, ReactiveLoginComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports:[LoginTFormComponent, ReactiveLoginComponent]
})
export class LoginModule { }
