import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterProductComponent } from './register-product.component';

const routes: Routes = [
  { path: '', component: RegisterProductComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: []
})
export class RegisterProductRoutingModule { }
