import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from '../config';
import { Clientes } from '../interfaces/Clientes';
import { Response } from '../interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class TodosClientesService {
  url = new Config().url;

  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading(state: boolean): void { this.loading.next(state) };

  constructor(private http: HttpClient) { }

  getClientes(token: string,orderBy: String | any = "NOME"): Observable<Response<Clientes[]>> {
    return this.http.get<Response<Clientes[]>>(this.url + 'clientes' + `?token=${token}&orderBy=${orderBy}`)
  }
}
