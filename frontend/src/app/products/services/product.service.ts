import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {

  getAll$(): Observable<any[]> {
    return of([
      {id: 1, name: 'Produkt 1', description: 'Produkt 1 - najlepszy', selected: false},
      {id: 2, name: 'Produkt 2', description: 'Produkt 2 - najlepszy', selected: false},
      {id: 3, name: 'Produkt 3', description: 'Produkt 3 - najlepszy', selected: false},
      {id: 4, name: 'Produkt 4', description: 'Produkt 4 - najlepszy', selected: false},
      {id: 5, name: 'Produkt 5', description: 'Produkt 5 - najlepszy', selected: false},
      {id: 6, name: 'Produkt 6', description: 'Produkt 6 - najlepszy', selected: false}
    ]);
  }
}
