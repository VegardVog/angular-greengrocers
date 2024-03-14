import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './storepage/store/store.component';
import { CartComponent } from './checkout/cart/cart.component';


const routes: Routes = [

  {path: "", component: StoreComponent},
  {path: "checkout", component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
