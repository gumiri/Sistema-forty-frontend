import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from '../config';
import { Response } from '../interfaces/Response';
import { ContasReceber } from '../interfaces/ContaReceber';
import { HistoricoCliente } from '../interfaces/historicoCliente';

@Injectable({
  providedIn: 'root'
})
export class HistoricoClienteService {

  url = new Config().url;

  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading(state: boolean): void { this.loading.next(state) };

  constructor(private http: HttpClient) { }

  getHistoricoCliente(cnpjCliente: String, dataRecebimento: String): Observable<Response<HistoricoCliente[]>> {
    return this.http.get<Response<HistoricoCliente[]>>(this.url + 'historico' + `?cc=${cnpjCliente}&dt=${dataRecebimento}`)
  }
}
