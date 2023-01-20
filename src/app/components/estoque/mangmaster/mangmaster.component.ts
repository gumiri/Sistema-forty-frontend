import { Component, OnInit } from '@angular/core';
import { EstoqueFilial } from 'src/app/interfaces/EstoqueFilial';
import { EstoqueMangmasterService } from 'src/app/service/estoque/estoque-mangmaster.service';
import { NavigationService } from 'src/app/service/navigation-service.service';

@Component({
  selector: 'app-mangmaster',
  templateUrl: './mangmaster.component.html',
  styleUrls: ['./mangmaster.component.css']
})
export class MangmasterComponent implements OnInit {

  estoqueMang : EstoqueFilial[] = [];
  estoqueMangFilter : EstoqueFilial[] = [];
  public loading$ = this.estoqueMangmasterService.loading.asObservable();
  token = JSON.parse(localStorage.getItem('auth')!).token;

  constructor(private estoqueMangmasterService : EstoqueMangmasterService, private navigationService : NavigationService) { }

  ngOnInit(): void {
    this.fetchContas();
  }

  private async fetchContas() {
    this.estoqueMangmasterService.isLoading(true);
    return this.estoqueMangmasterService.getEstoqueAlpha(this.token).subscribe((res) => {
      this.estoqueMangmasterService.isLoading(false);
      // display its headers
      const data = res.data;
      this.estoqueMang = data;
      this.estoqueMangFilter = data;
      //this.showExportButton = true;
    }, (err) => {
      this.estoqueMangmasterService.isLoading(false);
      alert("Erro, não foi possível resgatar informações do servidor!");
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value;

    this.estoqueMang = this.estoqueMangFilter;

    this.estoqueMang = this.estoqueMang.filter((estoque) => {
      return estoque.DESCRICAO.toLowerCase().includes(value);
    })
  }


}
