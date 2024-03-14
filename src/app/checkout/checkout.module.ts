import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { TotalComponent } from './total/total.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CartComponent,
    TotalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ], 
  exports: [
    CartComponent,
    TotalComponent,
  ],
})
export class CheckoutModule { }
