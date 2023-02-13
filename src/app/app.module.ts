import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ContasReceberComponent } from './components/contas-receber/contas-receber.component';
import { HeaderComponent } from './components/header/header.component';
import { HistoricoClienteComponent } from './components/historico-cliente/historico-cliente.component';
import { HomeComponent } from './components/home/home.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { EstoqueEntradaSaidaComponent } from './components/estoque/estoque-entrada-saida/estoque-entrada-saida.component';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { ConsolidadoComponent } from './components/estoque/consolidado/consolidado.component';
import { EstoquePorDataFortyflexComponent } from './components/estoque/estoque-por-data-fortyflex/estoque-por-data-fortyflex.component';

@NgModule({
  declarations: [
    AppComponent,
    ContasReceberComponent,
    HeaderComponent,
    HistoricoClienteComponent,
    HomeComponent,
    ClientesComponent,
    LoginComponent,
    AuthenticationComponent,
    EstoqueEntradaSaidaComponent,
    EstoqueComponent,
    ConsolidadoComponent,
    EstoquePorDataFortyflexComponent
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
