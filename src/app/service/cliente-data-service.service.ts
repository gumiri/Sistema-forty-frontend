import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/Clientes';
import { ContasReceber } from '../interfaces/ContaReceber';

@Injectable({
  providedIn: 'root'
})
export class ClienteDataServiceService {

  private cliente!: Clientes | ContasReceber;

  constructor() { }

  public setCliente(cliente: Clientes | ContasReceber){
    this.cliente = cliente;
  }
  public getCliente(){
    return this.cliente;
  }
}
