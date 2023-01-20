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
import { AlphaflexComponent } from './components/estoque/alphaflex/alphaflex.component';
import { FortyflexComponent } from './components/estoque/fortyflex/fortyflex.component';
import { FortyvinilComponent } from './components/estoque/fortyvinil/fortyvinil.component';
import { MangmasterComponent } from './components/estoque/mangmaster/mangmaster.component';
import { ConsolidadoComponent } from './components/estoque/consolidado/consolidado.component';

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
    AlphaflexComponent,
    FortyflexComponent,
    FortyvinilComponent,
    MangmasterComponent,
    ConsolidadoComponent
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
