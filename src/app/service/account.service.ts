import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../interfaces/Response';
import { Auth } from '../interfaces/Auth';
import { HttpClient } from '@angular/common/http';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  url = new Config().url;

  constructor(private http: HttpClient) { }

  login (user: Object | any) : Observable<Response<Auth>>{
      return this.http.post<Response<Auth>>(this.url + 'authentication', user);
  }
}
