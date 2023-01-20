import { Component, OnInit } from '@angular/core';
import { EstoqueAlphaflexService } from 'src/app/service/estoque/estoque-alphaflex.service';
import { EstoqueFilial } from 'src/app/interfaces/EstoqueFilial';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-alphaflex',
  templateUrl: './alphaflex.component.html',
  styleUrls: ['./alphaflex.component.css']
})
export class AlphaflexComponent implements OnInit {

  estoqueAlpha : EstoqueFilial[] = [];
  estoqueAlphaFilter : EstoqueFilial[] = [];
  public loading$ = this.estoqueAlphaflexService.loading.asObservable();
  token = JSON.parse(localStorage.getItem('auth')!).token;

  constructor(private estoqueAlphaflexService : EstoqueAlphaflexService, private navigationService : NavigationService) { }

  ngOnInit(): void {
    this.fetchContas();
  }

  private async fetchContas() {
    this.estoqueAlphaflexService.isLoading(true);
    return this.estoqueAlphaflexService.getEstoqueAlpha(this.token).subscribe((res) => {
      this.estoqueAlphaflexService.isLoading(false);
      // display its headers
      const data = res.data;
      this.estoqueAlpha = data;
      this.estoqueAlphaFilter = data;
      //this.showExportButton = true;
    }, (err) => {
      this.estoqueAlphaflexService.isLoading(false);
      alert("Erro, não foi possível resgatar informações do servidor!");
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value;

    this.estoqueAlpha = this.estoqueAlphaFilter;

    this.estoqueAlpha = this.estoqueAlpha.filter((estoque) => {
      return estoque.DESCRICAO.toLowerCase().includes(value);
    })
  }

}
