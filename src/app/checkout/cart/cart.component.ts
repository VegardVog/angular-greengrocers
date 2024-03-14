import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Item } from '../../models/item';
import { Subscription } from 'rxjs';
import { GlobalStateServiceService } from '../../global-state-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnDestroy{

  cart: Item[] = [];
  router = inject(Router);

  private subscription: Subscription;

  constructor(private globalState: GlobalStateServiceService) {
    this.subscription = this.globalState.getCart().subscribe(cart => {
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

  toStore() {
    this.router.navigate(["/"])
  }

  checkout() {

    this.globalState.resetCart();
    this.router.navigate(["/"])
  }
}
