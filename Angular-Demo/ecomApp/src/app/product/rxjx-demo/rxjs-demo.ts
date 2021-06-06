import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceRxJs {
  products: Product[] = [
    { id: 1, name: 'Iphone X', mfd: new Date('1-Jan-2021'), price: 50000 },
    { id: 2, name: 'one plus 8', mfd: new Date('1-Jan-2019'), price: 40000 },
    { id: 3, name: 'Samsung', mfd: new Date('1-Jan-2018'), price: 30000 },
  ];

  getProducts() {
    return of<Product[]>(this.products);
  }
}
