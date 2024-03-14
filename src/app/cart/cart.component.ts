import { Component, OnDestroy, inject } from '@angular/core';
import { Item } from '../models/item';
import { Subscription } from 'rxjs';
import { GlobalStateServiceService } from '../global-state-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnDestroy{

  cart: Item[] = [];

  private subscription: Subscription;

  constructor(private globalState: GlobalStateServiceService) {
    this.subscription = this.globalState.items$.subscribe(cart => {
      this.cart = cart;
    })
  }


  removeItem(item: Item) {
    this.globalState.removeFromCart(item);
    
  }

  addItem(item: Item) {
    this.globalState.addToCart(item);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  
}
