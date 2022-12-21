import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContasReceberComponent } from './components/contas-receber/contas-receber.component';
import { MaterialComponent } from './components/material/material.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoricoClienteComponent } from './components/historico-cliente/historico-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    ContasReceberComponent,
    MaterialComponent,
    HeaderComponent,
    HistoricoClienteComponent,
    HomeComponent,
    ClientesComponent,
    LoginComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
