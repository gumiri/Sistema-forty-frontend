import { Component, OnInit } from '@angular/core';
import { EstoquePorData } from 'src/app/interfaces/EstoquePorData';
import { EstoquePorDataFortyflexService } from 'src/app/service/estoque/estoque-por-data-fortyflex.service';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-estoque-por-data-fortyflex',
  templateUrl: './estoque-por-data-fortyflex.component.html',
  styleUrls: ['./estoque-por-data-fortyflex.component.css']
})
export class EstoquePorDataFortyflexComponent implements OnInit {

  estoqueFortyflex : EstoquePorData[] = [];
  estoqueFortyflexFilter : EstoquePorData[] = [];
  public loading$ = this.estoquePorDataFortyflexService.loading.asObservable();
  token = JSON.parse(localStorage.getItem('auth')!).token;
  date = '';

  constructor(private estoquePorDataFortyflexService : EstoquePorDataFortyflexService, private navigationService : NavigationService) { }

  ngOnInit(): void {
  }

  private async fetchContas(date: string) {
    this.estoquePorDataFortyflexService.isLoading(true);
    return this.estoquePorDataFortyflexService.getEstoqueAlpha(this.token, date).subscribe((res) => {
      this.estoquePorDataFortyflexService.isLoading(false);
      // display its headers
      const data = res.data;
      this.estoqueFortyflex = data;
      this.estoqueFortyflexFilter = data;
      //this.showExportButton = true;
    }, (err) => {
      this.estoquePorDataFortyflexService.isLoading(false);
      alert("Erro, não foi possível resgatar informações do servidor!");
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value;

    this.estoqueFortyflex = this.estoqueFortyflexFilter;

    this.estoqueFortyflex = this.estoqueFortyflex.filter((estoque) => {
      return estoque.DESCRICAO.toLowerCase().includes(value);
    })
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
