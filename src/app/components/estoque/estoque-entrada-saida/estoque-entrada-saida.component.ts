import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EstoqueEntradaSaidaService } from 'src/app/service/estoque/estoque-entrada-saida.service';
import * as XLSX from 'xlsx';
import { EstoqueES } from 'src/app/interfaces/EstoqueES';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-estoque-entrada-saida',
  templateUrl: './estoque-entrada-saida.component.html',
  styleUrls: ['./estoque-entrada-saida.component.css']
})
export class EstoqueEntradaSaidaComponent implements OnInit {

  estoqueES : EstoqueES[] = [];
  estoqueESFilter : EstoqueES[] = [];
  public loading$ = this.estoqueEntradaSaidaService.loading.asObservable();
  fileName = 'entrada-saida.xlsx';
  token = JSON.parse(localStorage.getItem('auth')!).token;
  date = '';

  constructor(private estoqueEntradaSaidaService : EstoqueEntradaSaidaService, private navigationService : NavigationService) { }

  ngOnInit(): void {
    
  }

  private async fetchContas(date: string) {
    this.estoqueEntradaSaidaService.isLoading(true);
    return this.estoqueEntradaSaidaService.getEstoqueES(this.token, date).subscribe((res) => {
      this.estoqueEntradaSaidaService.isLoading(false);
      // display its headers
      const data = res.data;
      this.estoqueES = data;
      this.estoqueESFilter = data;
      console.log(this.estoqueES[0].ES);
      //this.showExportButton = true;
    }, (err) => {
      this.estoqueEntradaSaidaService.isLoading(false);
      alert("Erro, não foi possível resgatar informações do servidor!");
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value;

    this.estoqueES = this.estoqueESFilter;

    this.estoqueES = this.estoqueES.filter((cliente) => {
      return cliente.DESCRICAO.toLowerCase().includes(value.toLocaleLowerCase());
    })
  }
  exportExcel(): void {
    let element = document.getElementById('estoque-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
  }

  debounce(fn: Function, time: number) {
    let debounceId: number | any = 0;
    return () => {
      clearTimeout(debounceId);
      debounceId = setTimeout(fn, time);
    }
  }

  submitForm = () => this.submit();
  debounceSubmit = this.debounce(this.submitForm, 600);
  onSubmit() : void {
    this.debounceSubmit();
  }

  submit() : void {
    var ano1 = this.date.substring(0, 4);
    var mes1 = this.date.substring(5, 7);
    var dia1 = this.date.substring(8, 10);
    var date1 = ano1 + "." + mes1 + "." + dia1;
    this.fetchContas(date1);
  }

}
