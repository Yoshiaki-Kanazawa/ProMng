import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from '../products';

import { from } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  selectedProduct: Product;

  products: Product[];

  constructor(private productService: ProductService, private messageService: MessageService) { }

  ngOnInit() {
    this.getProducts();
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    this.messageService.add(`ProductService: Selected product id=${product.id}`);
  }
  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.productService.addProduct({ name } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
  }
  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  }
}
