import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public _dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
  }

  actionFunction() {
    alert('You have logged out.');
    this.closeModal();
  }

  closeModal() {
    this._dialogRef.close();
  }

}
