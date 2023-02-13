import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from 'src/app/config';
import { EstoqueConsolidado } from 'src/app/interfaces/EstoqueConsolidado';
import { Response } from 'src/app/interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class EstoqueConsolidadoService {

  url = new Config().url;
  
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading(state: boolean): void { this.loading.next(state) };

  constructor(private http: HttpClient) { }

  getEstoqueTotal(token : string, date: string): Observable<Response<EstoqueConsolidado[]>> {
    return this.http.get<Response<EstoqueConsolidado[]>>(this.url + 'estoque-total' + `?token=${token}&date=${date}`)
  }
}
