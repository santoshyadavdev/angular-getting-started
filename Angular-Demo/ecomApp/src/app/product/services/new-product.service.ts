import { Inject, Injectable } from '@angular/core';
import { localStorageToken } from 'src/app/injection-token/localstorgae.token';
import { AppConfig } from '../../injection-token/app.config';
import { APPCONFIG } from '../../injection-token/app.config.token';
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

  constructor(
    @Inject(APPCONFIG) private apiService: AppConfig,
    @Inject(localStorageToken) private localStorage: any
  ) {
    console.log('new productservice instance');
    console.log(apiService.apiKey);
    console.log(localStorage.setItem('apiKey', apiService.apiKey));

    console.log(localStorage.getItem('apiKey'));
  }

  addProduct(product: Product) {
    this.products = [...this.products, product];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
