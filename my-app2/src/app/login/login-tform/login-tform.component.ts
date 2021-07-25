import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-tform',
  templateUrl: './login-tform.component.html',
  styleUrls: ['./login-tform.component.css']
})
export class LoginTFormComponent implements OnInit {

  constructor() { }
  public username:string;
  public password:string
  ngOnInit(): void {
  }

  onLogin(){
    console.log(this.password, this.username)
  }

}
