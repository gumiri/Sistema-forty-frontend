import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContasReceberService } from 'src/app/service/contas-receber.service';
import { catchError, Observable, Subscription } from 'rxjs';
import { ContasReceber } from 'src/app/interfaces/ContaReceber';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';
import { ClienteDataServiceService } from 'src/app/service/data-service/cliente-data-service.service';
import { Clientes } from 'src/app/interfaces/Clientes';
import { NavigationService } from 'src/app/service/navigation-service.service';


@Component({
  selector: 'app-contas-receber',
  templateUrl: './contas-receber.component.html',
  styleUrls: ['./contas-receber.component.css']
})
export class ContasReceberComponent implements OnInit {

  contasReceber: ContasReceber[] = [];
  contasReceberFilter: ContasReceber[] = [];
  date1 = '';
  date2 = '';
  orderBy = "";
  showExportButton = false;
  public loading$ = this.contasReceberService.loading.asObservable();
  fileName = 'contasReceber.xlsx';
  token = JSON.parse(localStorage.getItem('auth')!).token;


  constructor(private http: HttpClient,
    private contasReceberService: ContasReceberService,
    private clienteDataService: ClienteDataServiceService,
    private router: Router,
    private navigationService : NavigationService
  ) {
    
  }

  ngOnInit(): void {
    if(this.contasReceber.length > 0){
      this.showExportButton = true;
    }
    else{
      this.showExportButton = false;
    }
    if (this.navigationService.backUrl() == '/historico-cliente'){
      this.loadState();
    }
    console.log(this.navigationService.backUrl());
  }

  debounce(fn: Function, time: number) {
    let debounceId: number | any = 0;
    return () => {
      clearTimeout(debounceId);
      debounceId = setTimeout(fn, time);
    }
  }



  private async fetchContas(date1: String, date2: String, token: string, orderBy: String) {
    this.contasReceberService.isLoading(true);
    return this.contasReceberService.getContasReceber(date1, date2, token, orderBy).subscribe((res) => {
      this.contasReceberService.isLoading(false);
      // display its headers
      const data = res.data;
      this.contasReceber = data;
      this.contasReceberFilter = data;
      this.saveState();
      this.showExportButton = true;
    }, (err) => {
      this.contasReceberService.isLoading(false);
      alert("Erro, não foi possível resgatar informações do servidor!");
    });
  }
  submitForm = () => this.submit();
  debounceSubmit = this.debounce(this.submitForm, 600);
  submit() {
    var ano1 = this.date1.substring(0, 4);
    var mes1 = this.date1.substring(5, 7);
    var dia1 = this.date1.substring(8, 10);
    var ano2 = this.date2.substring(0, 4);
    var mes2 = this.date2.substring(5, 7);
    var dia2 = this.date2.substring(8, 10);
    var date1 = ano1 + mes1 + dia1;
    var date2 = ano2 + mes2 + dia2;
    this.fetchContas(date1, date2, this.token, this.orderBy);
  }
  onSubmit() {
    this.debounceSubmit();
  }
  exportExcel(): void {
    let element = document.getElementById('contasReceberTable');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value;

    this.contasReceber = this.contasReceberFilter;

    this.contasReceber = this.contasReceber.filter((conta) => {
      return conta.NOME.toLowerCase().includes(value);
    })
  }

  goToHistoricoCliente(cliente: ContasReceber) {
    this.clienteDataService.setCliente(cliente);
    this.router.navigateByUrl('/historico-cliente');
  }

  saveState() {
    localStorage.setItem('data', JSON.stringify(this.contasReceber));
  }
  loadState() {
    const contasInStorage = JSON.parse(localStorage.getItem('data')!);
    this.contasReceber = contasInStorage;
    this.contasReceberFilter = contasInStorage;
  }
}
