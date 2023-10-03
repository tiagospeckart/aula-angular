import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOME_PATH, REGISTER_PRODUCT_PATH } from './app.constants';

// Lazy-load function for HomeModule
function loadHomeModule() {
  return import('./components/home/home.module')
    .then((m) => m.HomeModule);
}

// Lazy-load function for RegisterProductModule
function loadRegisterProductModule() {
  return import('./components/register-product/register-product.module')
    .then((m) => m.RegisterProductModule);
}

// Route configuration
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: HOME_PATH },
  { path: HOME_PATH, loadChildren: loadHomeModule },
  { path: REGISTER_PRODUCT_PATH, loadChildren: loadRegisterProductModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
