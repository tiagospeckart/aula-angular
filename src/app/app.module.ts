import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { BodyModule } from './components/body/body.module';
import { RegisterProductModule } from './components/register-product/register-product.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    BodyModule,
    RegisterProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
