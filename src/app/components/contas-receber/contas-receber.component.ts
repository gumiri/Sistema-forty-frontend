import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContasReceberService } from 'src/app/service/contas-receber.service';
import { catchError, Observable, Subscription } from 'rxjs';
import { ContasReceber } from 'src/app/ContaReceber';

@Component({
  selector: 'app-contas-receber',
  templateUrl: './contas-receber.component.html',
  styleUrls: ['./contas-receber.component.css']
})
export class ContasReceberComponent implements OnInit {

  contasReceber: ContasReceber[] = [];
  date1 = '';
  date2 = '';
  orderBy = "";
  public loading$ = this.contasReceberService.loading.asObservable();


  constructor(private http: HttpClient, private contasReceberService: ContasReceberService) { }

  ngOnInit(): void {
  }

  debounce(fn: Function, time: number) {
    let debounceId: number | any = 0;
    return () => {
      clearTimeout(debounceId);
      debounceId = setTimeout(fn, time);
    }
  }



  private async fetchContas(date1: String, date2: String, orderBy: String) {
    this.contasReceberService.isLoading(true);
    return this.contasReceberService.getContasReceber(date1, date2, orderBy).subscribe((res) => {
      this.contasReceberService.isLoading(false);
      // display its headers
      const data = res.data;
      this.contasReceber = data;
    },(err) =>{
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
    this.fetchContas(date1, date2, this.orderBy);
  }
  onSubmit() {
    this.debounceSubmit();
  }
}
