import { Component, OnInit } from '@angular/core';
import { EstoqueFilial } from 'src/app/interfaces/EstoqueFilial';
import { EstoqueFortyvinilService } from 'src/app/service/estoque/estoque-fortyvinil.service';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-fortyvinil',
  templateUrl: './fortyvinil.component.html',
  styleUrls: ['./fortyvinil.component.css']
})
export class FortyvinilComponent implements OnInit {

  estoqueFortyvinil : EstoqueFilial[] = [];
  estoqueFortyvinilFilter : EstoqueFilial[] = [];
  public loading$ = this.estoqueFortyvinilService.loading.asObservable();
  token = JSON.parse(localStorage.getItem('auth')!).token;

  constructor(private estoqueFortyvinilService : EstoqueFortyvinilService, private navigationService : NavigationService) { }

  ngOnInit(): void {
    this.fetchContas();
  }

  private async fetchContas() {
    this.estoqueFortyvinilService.isLoading(true);
    return this.estoqueFortyvinilService.getEstoqueAlpha(this.token).subscribe((res) => {
      this.estoqueFortyvinilService.isLoading(false);
      // display its headers
      const data = res.data;
      this.estoqueFortyvinil = data;
      this.estoqueFortyvinilFilter = data;
      //this.showExportButton = true;
    }, (err) => {
      this.estoqueFortyvinilService.isLoading(false);
      alert("Erro, não foi possível resgatar informações do servidor!");
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value;

    this.estoqueFortyvinil = this.estoqueFortyvinilFilter;

    this.estoqueFortyvinil = this.estoqueFortyvinil.filter((estoque) => {
      return estoque.DESCRICAO.toLowerCase().includes(value);
    })
  }


}
