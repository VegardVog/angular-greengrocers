import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateServiceService {
  private cart = new BehaviorSubject<Item[]>([]);
  items$ = this.cart.asObservable();


  addToCart(item: Item) {
    const currentCart = this.cart.value;
    console.log(currentCart);
    if(currentCart.find((e) => e.id === item.id)) {
      const newCart = currentCart.map((e) => e.id === item.id ? {...e, quantity: e.quantity + 1} : e);
      this.cart.next([...newCart]);
    } else {
      this.cart.next(([...currentCart, item]));
    }
    
  }


  removeFromCart(item: Item) {
    const currentCart = this.cart.value;
    console.log(currentCart);
    if(currentCart.find((e) => e.id === item.id)) {
      if(item.quantity - 1 > 0) {
        const newCart = currentCart.map((e) => e.id === item.id ? {...e, quantity: e.quantity - 1} : e);
        this.cart.next([...newCart]);
      } else {
        this.cart.next(currentCart.filter((e) => e.id !== item.id));
      }

    } 
  }

  getCart(): Observable<Item[]> {
    return this.items$;
  }

}
