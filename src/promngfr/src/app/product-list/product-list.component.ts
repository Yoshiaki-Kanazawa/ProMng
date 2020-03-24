import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products';

import { from } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product;

  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
  }
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
}
