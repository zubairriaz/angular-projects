import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModalServiceService {

  private subject = new BehaviorSubject(false);
  modal$ = this.subject.asObservable();


  constructor() { }

  onOpenModal(){
    console.log('hit')
    this.subject.next(true)
  }
  onCloseModal(){
    this.subject.next(false)
  }
}
