import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterProductRoutingModule } from './register-product-routing.module';
import { RegisterProductComponent } from './register-product.component';


@NgModule({
  declarations: [
    RegisterProductComponent
  ],
  imports: [
    CommonModule,
    RegisterProductRoutingModule
  ]
})
export class RegisterProductModule { }
