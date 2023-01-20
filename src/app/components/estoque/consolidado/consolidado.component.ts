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
    this.fetchContas();
  }

  private async fetchContas() {
    this.estoqueConsolidadoService.isLoading(true);
    return this.estoqueConsolidadoService.getEstoqueTotal(this.token).subscribe((res) => {
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

  onSubmit() : void {

  }

}
