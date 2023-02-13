import { Component, OnInit } from '@angular/core';
import { EstoqueConsolidado } from 'src/app/interfaces/EstoqueConsolidado';
import { EstoqueConsolidadoService } from 'src/app/service/estoque/estoque-consolidado.service';
import { NavigationService } from 'src/app/service/navigation-service.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-consolidado',
  templateUrl: './consolidado.component.html',
  styleUrls: ['./consolidado.component.css']
})
export class ConsolidadoComponent implements OnInit {

  estoqueTotal : EstoqueConsolidado[] = [];
  estoqueTotalFilter : EstoqueConsolidado[] = [];
  public loading$ = this.estoqueConsolidadoService.loading.asObservable();
  token = JSON.parse(localStorage.getItem('auth')!).token;
  showExportButton = false;
  fileName = 'estoqueConsolidado.xlsx';
  date = '';

  constructor(private estoqueConsolidadoService : EstoqueConsolidadoService, private navigationService : NavigationService) { }

  ngOnInit(): void {
    
  }

  private async fetchContas(date: string) {
    this.estoqueConsolidadoService.isLoading(true);
    return this.estoqueConsolidadoService.getEstoqueTotal(this.token, date).subscribe((res) => {
      this.estoqueConsolidadoService.isLoading(false);
      // display its headers
      const data = res.data;
      this.estoqueTotal = data;
      this.estoqueTotalFilter = data;
      this.showExportButton = true;
    }, (err) => {
      this.estoqueConsolidadoService.isLoading(false);
      alert("Erro, não foi possível resgatar informações do servidor!");
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value;

    this.estoqueTotal = this.estoqueTotalFilter;

    this.estoqueTotal = this.estoqueTotalFilter.filter((estoque) => {
      return estoque.DESCRICAO.toLowerCase().includes(value);
    })
  }

  exportExcel(): void {
    let element = document.getElementById('estoque-consolidado-table');
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
    console.log(date1);
  }

}
