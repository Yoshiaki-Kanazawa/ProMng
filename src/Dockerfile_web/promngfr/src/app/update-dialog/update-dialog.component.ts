import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

import { Product } from '../product';
import { TestService } from '../test.service';

import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
  styleUrls: ['./update-dialog.component.css']
})
export class UpdateDialogComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public data1: any, public _dialogRef: MatDialogRef<UpdateDialogComponent>, private testService: TestService) { }

   data: Product[];

  ngOnInit() {
  }

  actionFunction() {
    alert('変更しました！');
    this.closeModal();
  }

  closeModal() {
    this._dialogRef.close();
  }

  update(id: number, name: string, amount: number, start_date: Date): void {
    name = name.trim();
    if (!name || !amount) { return; }
    const product = new Product();
    product.id = id;
    product.name = name;
    product.amount = amount;
    product.start_date = start_date;
    this.testService.updateTest(product)
      .subscribe(data => {
        this.data.push(data);
      });
  }

}
