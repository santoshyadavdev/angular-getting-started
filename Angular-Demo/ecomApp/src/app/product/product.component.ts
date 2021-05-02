import { Component, DoCheck, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  // interpolation: ['[', ']'],
  selector: 'ecom-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck {
  title = 'Product Information';

  productName = 'One Plus 9';

  visible = false;

  hidden = true;

  selectedProduct: Partial<Product> = {};

  productList: Product[] = [];

  header = 'Product List';
  constructor() {}

  ngOnInit() {
    this.productList = [
      { id: 1, name: 'Iphone X', mfd: new Date('1-Jan-2021'), price: 50000 },
      { id: 2, name: 'one plus 8', mfd: new Date('1-Jan-2019'), price: 40000 },
      { id: 3, name: 'Samsung', mfd: new Date('1-Jan-2018'), price: 30000 },
    ];
  }

  ngDoCheck() {
    // console.log('do check is called');
  }

  toggle() {
    this.visible = !this.visible;
  }

  toggleTable() {
    this.hidden = !this.hidden;
    this.header = 'New Product List';
  }

  loadProduct() {}

  addProduct() {
    this.productList = [
      ...this.productList,
      {
        id: 4,
        name: 'Xiomi',
        mfd: new Date('1-Feb-2020'),
        price: 20000,
      },
    ];
    //  this.productList.push({
    //     id: 4,
    //     name: 'Xiomi',
    //     mfd: new Date('1-Feb-2020'),
    //     price: 20000,
    //   });
  }

  deleteProduct(product: Product) {
    this.selectedProduct = product;
  }
}
