import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProductRoutingModule } from './register-product-routing.module';
import { RegisterProductComponent } from './register-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterProductComponent
  ],
  imports: [
    CommonModule,
    RegisterProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegisterProductModule { }
