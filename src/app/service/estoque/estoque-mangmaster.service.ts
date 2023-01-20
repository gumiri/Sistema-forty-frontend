import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from 'src/app/config';
import { EstoqueFilial } from 'src/app/interfaces/EstoqueFilial';
import { Response } from 'src/app/interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class EstoqueMangmasterService {

  url = new Config().url;
  
  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading(state: boolean): void { this.loading.next(state) };

  constructor(private http: HttpClient) { }

  getEstoqueAlpha(token : string): Observable<Response<EstoqueFilial[]>> {
    return this.http.get<Response<EstoqueFilial[]>>(this.url + 'estoque-mangmaster' + `?token=${token}`)
  }
}