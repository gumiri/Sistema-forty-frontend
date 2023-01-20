import { Component, OnInit } from '@angular/core';
import { EstoqueFilial } from 'src/app/interfaces/EstoqueFilial';
import { EstoqueFortyflexService } from 'src/app/service/estoque/estoque-fortyflex.service';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-fortyflex',
  templateUrl: './fortyflex.component.html',
  styleUrls: ['./fortyflex.component.css']
})
export class FortyflexComponent implements OnInit {
  
  estoqueFortyflex : EstoqueFilial[] = [];
  estoqueFortyflexFilter : EstoqueFilial[] = [];
  public loading$ = this.estoqueFortyflexService.loading.asObservable();
  token = JSON.parse(localStorage.getItem('auth')!).token;

  constructor(private estoqueFortyflexService : EstoqueFortyflexService, private navigationService : NavigationService) { }

  ngOnInit(): void {
    this.fetchContas();
  }

  private async fetchContas() {
    this.estoqueFortyflexService.isLoading(true);
    return this.estoqueFortyflexService.getEstoqueAlpha(this.token).subscribe((res) => {
      this.estoqueFortyflexService.isLoading(false);
      // display its headers
      const data = res.data;
      this.estoqueFortyflex = data;
      this.estoqueFortyflexFilter = data;
      //this.showExportButton = true;
    }, (err) => {
      this.estoqueFortyflexService.isLoading(false);
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
}
