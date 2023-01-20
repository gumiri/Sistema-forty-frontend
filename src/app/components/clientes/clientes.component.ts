import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodosClientesService } from 'src/app/service/todos-clientes.service';
import { Clientes } from 'src/app/interfaces/Clientes';
import { ClienteDataServiceService } from 'src/app/service/data-service/cliente-data-service.service';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Clientes[] = [];
  clientesFilter: Clientes[] = [];
  public loading$ = this.todosClientesService.loading.asObservable();
  now = new Date().getTime();
  expireClienteState! : number;
  clienteRenderLimit = 100;
  token = JSON.parse(localStorage.getItem('auth')!).token;

  constructor(
    private http: HttpClient,
    private todosClientesService: TodosClientesService,
    private clienteDataService: ClienteDataServiceService,
    private router: Router,
    private navigationService : NavigationService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('cliente')) {
      this.loadState();
    }
    else {
      this.fetchClientes();
    }
    this.checkExpireClienteState();
  }

  private async fetchClientes() {
    this.todosClientesService.isLoading(true);
    return this.todosClientesService.getClientes(this.token).subscribe((res) => {
      this.todosClientesService.isLoading(false);
      // display its headers
      const data = res.data;
      this.clientes = data;
      this.clientesFilter = data;
      let expire = this.now + 600000;
      this.saveState(expire);
    }, (err) => {
      this.todosClientesService.isLoading(false);
      alert("Erro, não foi possível resgatar informações do servidor!");
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value;

    if (value && value.length<=1){
      this.clienteRenderLimit = 250;
    }
    else{
      this.clienteRenderLimit = 100;
    }

    this.clientes = this.clientesFilter;

    this.clientes = this.clientes.filter((cliente) => {
      return cliente.NOME.toLowerCase().includes(value);
    })
  }
  goToHistoricoCliente(cliente: Clientes) {
    this.clienteDataService.setCliente(cliente);
    this.router.navigateByUrl('/historico-cliente');
  }

  saveState(expire: number) {
    localStorage.setItem('cliente', JSON.stringify(this.clientes));
    localStorage.setItem('clienteExpire', JSON.stringify(expire));
  }
  loadState() {
    const clientesInStorage = JSON.parse(localStorage.getItem('cliente')!);
    const clientesExpire = JSON.parse(localStorage.getItem('clienteExpire')!);
    this.clientes = clientesInStorage;
    this.clientesFilter = clientesInStorage;
    this.expireClienteState = clientesExpire;
  }
  checkExpireClienteState(){
    if (this.now > this.expireClienteState) {
      localStorage.removeItem('cliente');
      this.now = new Date().getTime();
      this.expireClienteState = this.now + 600000;
    }
  }
}
