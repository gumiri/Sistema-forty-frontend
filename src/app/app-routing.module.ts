import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from "./components/authentication/authentication.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { ContasReceberComponent } from "./components/contas-receber/contas-receber.component";
import { HeaderComponent } from "./components/header/header.component";
import { HistoricoClienteComponent } from "./components/historico-cliente/historico-cliente.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { MaterialComponent } from "./components/material/material.component";
import { AuthGuard } from "./guard/auth.guard";

const routes: Routes = [
    {
        path: '',
        component: HeaderComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'contas-a-receber', component: ContasReceberComponent },
            { path: 'material', component: MaterialComponent },
            { path: 'clientes', component: ClientesComponent },
            { path: 'historico-cliente', component: HistoricoClienteComponent }
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