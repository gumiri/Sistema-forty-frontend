import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { ContasReceber } from '../ContaReceber';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class ContasReceberService {
  url = 'http://192.168.2.39:3000/getctrec';
  
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading(state: boolean): void { this.loading.next(state) };

  constructor(private http: HttpClient) { }

  getContasReceber(date1: String, date2: String, orderBy: String): Observable<Response<ContasReceber[]>> {
    return this.http.get<Response<ContasReceber[]>>(this.url + `?date1=${date1}&date2=${date2}&orderBy=${orderBy}`)
  }
}
