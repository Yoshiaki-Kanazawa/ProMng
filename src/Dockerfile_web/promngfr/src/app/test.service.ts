import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private Url = `http://0.0.0.0:30000/api/products/`;
  private httpOptions: any = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  constructor(private http: HttpClient) {
    this.setAuthorization('my-auth-token');
  }

  public getTest(): Observable<any> {
    return this.http.get(this.Url);
  }

  public setAuthorization(token: string = null): void {
    if (!token) {
      return;
    }
    const bearerToken = `Bearer ${token}`;
    this.httpOptions.headers = this.httpOptions.headers.set(`Authorization`, bearerToken);
  }
}
