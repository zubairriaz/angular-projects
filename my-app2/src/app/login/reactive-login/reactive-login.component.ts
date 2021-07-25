import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.css'],
})
export class ReactiveLoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required,Validators.minLength(6)]),
  });

  constructor() {}

  ngOnInit(): void {}
  getUserName(): AbstractControl {
    let value = this.loginForm.controls.username;

    return value;
  }
  onLogin() {
    let controls = this.loginForm.controls;
    console.log(controls);
  }
}
