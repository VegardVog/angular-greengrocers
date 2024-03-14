import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ServiceService } from '../service.service';
import { Item } from '../models/item';
import { GlobalStateServiceService } from '../global-state-service.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{



  service = inject(ServiceService);
  groceries: Item[] = [];
  showGroceries: Item[] = [];
  

  constructor(private globalState: GlobalStateServiceService) {

  }
  ngOnInit(): void {
    this.service.getGroceriesAll().subscribe(
      {
        next: (groceries) => {
          console.log(groceries);
          this.groceries = groceries.map((item) => ({...item, quantity: 1}));
          this.showGroceries = this.groceries;
        },

        error: (error) => {
          console.error(error);
        }
      }
    )
  }


  addToCart(item: Item) {
    this.globalState.addToCart(item);
  }

  filterByType() {
    this.showGroceries = this.groceries?.sort((a,b) =>a.type.localeCompare(b.type));

  }

  sortByPrice() {
    this.showGroceries = this.groceries?.sort((a,b) => a.price - b.price);
 
  }

  sortByName() {
    this.showGroceries = this.groceries?.sort((a,b) =>a.name.localeCompare(b.name));
  }



}
