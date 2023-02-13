import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Config } from 'src/app/config';
import { Response } from 'src/app/interfaces/Response';
import { EstoquePorData } from 'src/app/interfaces/EstoquePorData';

@Injectable({
  providedIn: 'root'
})
export class EstoquePorDataFortyflexService {

  url = new Config().url;

  public loading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isLoading(state: boolean): void { this.loading.next(state) };

  constructor(private http: HttpClient) { }

  getEstoqueAlpha(token: string, date: string): Observable<Response<EstoquePorData[]>> {
    return this.http.get<Response<EstoquePorData[]>>(this.url + 'estoque-data-fortyflex' + `?token=${token}&date=${date}`)
  }
}
