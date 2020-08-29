import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { Product } from '../product';
import { TestService } from '../test.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public _dialogRef: MatDialogRef<DialogComponent>, private testService: TestService, private product: Product) { }

   data: Product[];

  ngOnInit() {
  }

  actionFunction() {
    alert('You have logged out.');
    this.closeModal();
  }

  closeModal() {
    this._dialogRef.close();
  }

  add(name: string, amount: number, start_date: Date): void {
    name = name.trim();
    if (!name || !amount) { return; }
    const product = new Product();
    product.name = name;
    product.amount = amount;
    product.start_date = start_date;
    this.testService.addTest(product)
      .subscribe(data => {
        this.data.push(data);
      });
  }

}
