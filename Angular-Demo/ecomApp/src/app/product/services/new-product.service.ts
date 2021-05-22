import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class NewProductService {
  products: Product[] = [
    { id: 1, name: 'IPad M1', mfd: new Date('1-Jan-2021'), price: 500000 },
    { id: 2, name: 'ChromeBook', mfd: new Date('1-Jan-2019'), price: 400000 },
    { id: 3, name: 'Duo', mfd: new Date('1-Jan-2018'), price: 300000 },
  ];

  constructor() {
    console.log('new productservice instance');
  }

  addProduct(product: Product) {
    this.products = [...this.products, product];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
