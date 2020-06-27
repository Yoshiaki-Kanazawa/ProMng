import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { TestService } from '../test.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.testService.getTest()
      .subscribe(products => this.products = products);
  }
}
