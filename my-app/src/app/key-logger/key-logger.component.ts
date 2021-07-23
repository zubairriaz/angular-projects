import { TagPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { fromEvent } from 'rxjs';
import {filter, map, tap} from "rxjs/operators"

@Component({
  selector: 'app-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.css'],
})
export class KeyLoggerComponent implements OnInit {
  keys: string = '';

  @Input() numeric:boolean;

  @ViewChild('keyContainer',{static: true}) input: ElementRef;
  constructor() {}
  ngOnInit(): void {
    const logger = fromEvent(this.input.nativeElement, "keyup");
    logger.pipe(
      map((evt:KeyboardEvent)=>{
        return evt.key.charCodeAt(0)}),
      filter(code=>{
         if(this.numeric){
          return !(code > 31 && (code < 48 || code > 57));
        }else{
          return true
        }
      }),

      tap(digit=>this.keys+=String.fromCharCode(digit))
    ).subscribe()
    
  }
}
