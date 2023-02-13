import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { EstoqueES } from 'src/app/interfaces/EstoqueES';
import { Response } from 'src/app/interfaces/Response';
import { Config } from 'src/app/config';

@Injectable({
  providedIn: 'root'
})
export class EstoqueEntradaSaidaService {

  url = new Config().url;
  
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading(state: boolean): void { this.loading.next(state) };

  constructor(private http: HttpClient) { }

  getEstoqueES(token : string, date: string): Observable<Response<EstoqueES[]>> {
    return this.http.get<Response<EstoqueES[]>>(this.url + 'estoque' + `?token=${token}&date=${date}`)
  }
}
