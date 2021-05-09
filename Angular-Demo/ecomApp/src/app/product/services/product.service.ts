import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  constructor() {}

  // add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  getProducts(): Product[] {
    this.products = [
      { id: 1, name: 'Iphone X', mfd: new Date('1-Jan-2021'), price: 50000 },
      { id: 2, name: 'one plus 8', mfd: new Date('1-Jan-2019'), price: 40000 },
      { id: 3, name: 'Samsung', mfd: new Date('1-Jan-2018'), price: 30000 },
    ];
    return this.products;
  }
}
