import { Inject, Injectable } from '@angular/core';
import { Product } from '../product';
import { NewProductService } from './new-product.service';
import { APPCONFIG } from '../../injection-token/app.config.token';
import { AppConfig } from '../../injection-token/app.config';

@Injectable({
  providedIn: 'root',
  useExisting: NewProductService,
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Iphone X', mfd: new Date('1-Jan-2021'), price: 50000 },
    { id: 2, name: 'one plus 8', mfd: new Date('1-Jan-2019'), price: 40000 },
    { id: 3, name: 'Samsung', mfd: new Date('1-Jan-2018'), price: 30000 },
  ];

  constructor() {
    console.log('new product instance');
  }

  addProduct(product: Product) {
    this.products = [...this.products, product];
  }

  // add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  getProducts(): Product[] {
    return this.products;
  }

}
