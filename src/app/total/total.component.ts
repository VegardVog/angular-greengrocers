import { Component, OnInit } from '@angular/core';
import { GlobalStateServiceService } from '../global-state-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

  currency = 0;

  private subscription: Subscription;

  constructor(private globalState: GlobalStateServiceService) {
  //Subscribe to global state
    this.subscription = this.globalState.items$.subscribe( (cart) => {
      //Sum the quantity * price of cart items, assign to currency
      this.currency = cart.reduce((val, currentVal) => {
        return val + currentVal.quantity * currentVal.price;
      }, 0)
    })
  }
  
};