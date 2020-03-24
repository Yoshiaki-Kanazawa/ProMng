import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Observable<Product[]> {
    return of (PRODUCTS);
  }
  getProduct(id: number): Observable<Product> {
    return of (PRODUCTS.find (product => product.id === id));
  }
  constructor() { }
}
