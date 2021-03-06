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


  // tslint:disable-next-line: variable-name
  constructor(public _dialogRef: MatDialogRef<DialogComponent>, private testService: TestService) { }

   data: Product[];

  ngOnInit() {
  }

  actionFunction() {
    alert('追加しました！ (ﾎﾞﾌｩ');
    this.closeModal();
  }

  closeModal() {
    this._dialogRef.close();
  }

  // tslint:disable-next-line: variable-name
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
