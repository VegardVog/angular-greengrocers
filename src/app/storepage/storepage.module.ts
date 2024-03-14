import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';



@NgModule({
  declarations: [
    StoreComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
  ],
  exports: [
    StoreComponent,
  ],
})
export class StorepageModule { }
