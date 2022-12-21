import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/interfaces/Auth';
import { AccountService } from 'src/app/service/account.service';
import * as shajs from 'sha.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';

  login = {
    user: '',
    password: ''
  }
  auth!: Auth;

  constructor(private accountService: AccountService, private router: Router) { }

  ngOnInit(): void {
  }

  private fetchAuth(){
    this.login.user = this.user;
    this.login.password = shajs('sha256').update(this.password).digest('hex');
    return this.accountService.login(this.login).subscribe((res) => {
      this.auth = res.data;
      localStorage.setItem('auth', JSON.stringify(this.auth));
      this.router.navigate(['']);
    }, (err) =>{
      if (err.status == 401){
        alert("Usuário ou senha incorretos!");
      }
      else{
        alert("Não foi possível retornar informações do servidor!");
      }
      
    })
  }

  onSubmit() {
      this.fetchAuth();
  }

}
