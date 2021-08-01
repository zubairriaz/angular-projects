import { Component, OnInit } from '@angular/core';
import {ModalServiceService} from '../../services/modal-service.service'
import {MatDialog,MatDialogConfig} from "@angular/material/dialog"
import {DialogueComponent} from "../../dialog/dialogue/dialogue.component"


const config = new MatDialogConfig();
config.disableClose = true

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private modalService:ModalServiceService, public dialogue:MatDialog) { }
  

  ngOnInit(): void {
    this.modalService.modal$.subscribe((value) => {
      if(value){
        this.dialogue.open(DialogueComponent,config)
      }
    });
  }

  onNewClick(){
    this.modalService.onOpenModal();
  }

}
