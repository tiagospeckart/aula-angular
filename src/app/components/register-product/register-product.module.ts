import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterProductRoutingModule } from './register-product-routing.module';
import { RegisterProductComponent } from './register-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialImportsModule } from 'src/app/shared/material-imports/material-imports.module';


@NgModule({
  declarations: [
    RegisterProductComponent
  ],
  imports: [
    CommonModule,
    RegisterProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    MaterialImportsModule
  ]
})
export class RegisterProductModule { }
