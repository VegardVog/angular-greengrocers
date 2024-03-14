import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  http = inject(HttpClient);


  getGroceriesAll(): Observable<Item[]> {
    return this.http.get<Item[]>(`${environment.apiUrl}groceries`).pipe(
      catchError(error => {
        console.error(error);
        throw error;
    }))
  }

}
