import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private Url = `http://0.0.0.0:30000/api/products/`;
  private httpOptions: any = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) {
  }

  public getTest(): Observable<any> {
    return this.http.get(this.Url);
  }

  public addTest(data: Product): Observable<any> {
    return this.http.post<Product>(this.Url, data, this.httpOptions);
  }

  public deleteTest(id: string): Observable<any> {
    return this.http.delete<Product>(this.Url + id, this.httpOptions);
  }
}
