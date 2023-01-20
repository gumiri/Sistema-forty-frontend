import { Injectable } from '@angular/core';
import { ContasReceber } from 'src/app/interfaces/ContaReceber';

@Injectable({
  providedIn: 'root'
})
export class ContasDataServiceService {

  private cliente!: ContasReceber;

  constructor() { }

  public setCliente(cliente: ContasReceber){
    this.cliente = cliente;
  }
  public getCliente(){
    return this.cliente;
  }
}
