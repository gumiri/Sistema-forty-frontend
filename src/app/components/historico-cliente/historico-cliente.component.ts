import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistoricoCliente } from 'src/app/interfaces/historicoCliente';
import { ClienteDataServiceService } from 'src/app/service/data-service/cliente-data-service.service';
import { HistoricoClienteService } from 'src/app/service/historico-cliente.service';
import { Location } from '@angular/common'
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-historico-cliente',
  templateUrl: './historico-cliente.component.html',
  styleUrls: ['./historico-cliente.component.css']
})
export class HistoricoClienteComponent implements OnInit {

  historicoCliente: HistoricoCliente[] = [];
  cnpjCliente : String = '';
  today = new Date();
  now = this.today.getFullYear().toString() + ((this.today.getMonth() + 1) > 9? '' : '0') + (this.today.getMonth() + 1).toString()  + (this.today.getDate() > 9 ? '' : '0') + this.today.getDate().toString();
  nomeCliente = this.clienteDataService.getCliente().NOME;
  filiaisCliente = this.clienteDataService.getCliente().FILIAIS;
  public loading$ = this.historicoClienteService.loading.asObservable();

  constructor(
    private location: Location,
    private http: HttpClient,
    private historicoClienteService: HistoricoClienteService,
    private clienteDataService: ClienteDataServiceService,
    private navigationService : NavigationService
  ) { }

  ngOnInit(): void {
    this.cnpjCliente = this.clienteDataService.getCliente().CNPJ;
    this.fetchHistoricoCliente();
  }

  private fetchHistoricoCliente() {
    this.historicoClienteService.isLoading(true);
    console.log(this.now);
    return this.historicoClienteService.getHistoricoCliente(this.cnpjCliente, this.now).subscribe((res) => {
      this.historicoClienteService.isLoading(false);
      this.historicoCliente = res.data;
      console.log(this.now);
    }, (err) => {
      this.historicoClienteService.isLoading(false);
      alert("Erro, não foi possível resgatar informações do servidor!");
    })
  }

  goToPreviousPage(){
    this.navigationService.back();
  }

}
