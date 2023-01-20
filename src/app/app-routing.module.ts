import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { ContasReceberComponent } from "./components/contas-receber/contas-receber.component";
import { AlphaflexComponent } from "./components/estoque/alphaflex/alphaflex.component";
import { ConsolidadoComponent } from "./components/estoque/consolidado/consolidado.component";
import { EstoqueEntradaSaidaComponent } from "./components/estoque/estoque-entrada-saida/estoque-entrada-saida.component";
import { EstoqueComponent } from "./components/estoque/estoque.component";
import { FortyflexComponent } from "./components/estoque/fortyflex/fortyflex.component";
import { FortyvinilComponent } from "./components/estoque/fortyvinil/fortyvinil.component";
import { MangmasterComponent } from "./components/estoque/mangmaster/mangmaster.component";
import { HeaderComponent } from "./components/header/header.component";
import { HistoricoClienteComponent } from "./components/historico-cliente/historico-cliente.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
    {
        path: '',
        component: HeaderComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'contas-a-receber', component: ContasReceberComponent },
            { path: 'estoque/estoque-entrada-saida', component: EstoqueEntradaSaidaComponent },
            { path: 'estoque', component: EstoqueComponent },
            { path: 'clientes', component: ClientesComponent },
            { path: 'historico-cliente', component: HistoricoClienteComponent },
            { path: 'estoque/alphaflex', component: AlphaflexComponent },
            { path: 'estoque/fortyflex', component: FortyflexComponent },
            { path: 'estoque/fortyvinil', component: FortyvinilComponent },
            { path: 'estoque/mangmaster', component: MangmasterComponent },
            { path: 'estoque/consolidado', component: ConsolidadoComponent },
        ],
        canActivate: [AuthGuard]
    },
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', component: LoginComponent}
        ]
    }
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }