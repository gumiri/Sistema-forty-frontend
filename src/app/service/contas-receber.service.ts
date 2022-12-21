import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { ContasReceber } from '../interfaces/ContaReceber';
import { Response } from '../interfaces/Response';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ContasReceberService {

  url = new Config().url;
  
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading(state: boolean): void { this.loading.next(state) };

  constructor(private http: HttpClient) { }

  getContasReceber(date1: String, date2: String, token: string, orderBy: String): Observable<Response<ContasReceber[]>> {
    return this.http.get<Response<ContasReceber[]>>(this.url + 'getctrec' + `?date1=${date1}&date2=${date2}&token=${token}&orderBy=${orderBy}`)
  }
}
