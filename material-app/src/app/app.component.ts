import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'material-app';
  username = new FormControl("",Validators.required)
  isBeating = true;
   heros:Hero[] = [
    {id:"1",name:"hero1"},
    {id:"1",name:"hero2"},
    {id:"1",name:"hero3"},
    {id:"1",name:"hero4"},
    {id:"1",name:"hero5"}

  ]
  filteredHeros:Observable<Hero[]>;
 ngOnInit(){
   this.filteredHeros = this.username.valueChanges.pipe(
     map(name => this.heros.filter(hero=>hero.name.startsWith(name)))
   )
 }

  getValue(){
    return this.username.value
  }
}

interface Hero{
  id:string,
  name:string

}
