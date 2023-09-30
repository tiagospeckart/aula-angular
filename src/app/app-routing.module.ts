import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  // Criar uma rota => Objeto { }
  // 1 - Zerar rotas
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  // 2 - criar a rota de home
  // defino rota e defino o componente
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
