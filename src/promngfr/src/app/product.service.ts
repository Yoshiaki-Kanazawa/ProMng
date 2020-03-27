import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './products';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = '.../asset/pruducttest.json';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type' : 'application/json'})
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  private log(message: string) {
    this.messageService.add(`productService: ${message}`);
  }

  getProducts(): Observable<Product[]> {
    this.messageService.add('ProductService: fetched Product');
    return of(PRODUCTS);
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        catchError(this.handleError<Product[]>('getProducts', []))
      );
  }
  getProduct(id: number): Observable<Product> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(PRODUCTS.find(hero => hero.id === id));
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log(`fetch product id=${id}`)),
      catchError(this.handleError<Product>(`getProduct id=${id}`))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.massege}`);
      return of (result as T);
    };
  }
  updateProduct(product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, this.httpOptions).pipe(
      tap(_ => this.log(`update product id=${product.id}`)),
      catchError(this.handleError<any>('updateProduct'))
    );
  }
  addProduct(product: Product): Observable<Product> {
    return this.http.post(this.productsUrl, product, this.httpOptions).pipe(
      tap((newProduct: Product) => this.log(`add product w/ id=${newProduct.id}`)),
      catchError(this.handleError<Product>('addProduct'))
    );
  }
  deleteProduct(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, this.httpOptions).pipe(
      tap(_ => this.log(`delete product id=${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
      );
  }
}
