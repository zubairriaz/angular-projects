import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from 'src/app/services/modal-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css'],
})
export class DialogueComponent implements OnInit {
  constructor(private service: ModalServiceService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.service.modal$.subscribe((value) => {
      console.log(value);
    });
  }
}
