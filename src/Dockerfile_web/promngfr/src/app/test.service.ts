import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  producttest: Product[] = [];
  private Url = `http://app:30000/api/product`;
  private httpOptions: any = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) {
    this.setAuthorization('my-auth-token');
  }

  public getTest(): Promise<Product[]> {
    return this.http
      .get(this.Url + 'get/' + this.httpOptions)
      .toPromise()
      .then((res) => {
        const response: any = res;
        return response;
      })
      .catch(this.errorHandle);
  }

  private errorHandle(err) {
    console.log('Error occured', err);
    return Promise.reject(err.message || err);
  }

  public setAuthorization(token: string = null): void {
    if (!token) {
      return;
    }
    const bearerToken = `Bearer ${token}`;
    this.httpOptions.headers = this.httpOptions.headers.set(`Authorization`, bearerToken);
  }
}



