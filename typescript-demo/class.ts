import { AddressUtil, Address } from "./interfaces";

// import * as addr from './interfaces';

class Product implements AddressUtil {
  private _id: number;
  name: string;
  price: number;
  categoty: string;
  address: Address;

  set id(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  constructor(name: string, price: number, category: string) {
    this._id = 0;
    this.name = name;
    this.price = price;
    this.categoty = category;
    this.address = { id: 0 };
  }
  add(num1: number, num2: number): number {
    return num1 + num2;
  }

  getproductWithPrice() {
    return `${this.name} costs ${this.price}`;
  }
}

let mobilePhone = new Product("One Plus 9", 50000, "Mobile Phones");

mobilePhone.id = 10;

console.log(mobilePhone);
console.log(mobilePhone.getproductWithPrice());

class Mobile extends Product {
  //   constructor(name: string, price: number, category: string) {
  //     super(name, price, category);
  //   }

  getproductWithPrice() {
    return super.getproductWithPrice();
  }
}

let applePhones = new Mobile("Apple 11", 10000, "Mobile Phones");
console.log(applePhones.getproductWithPrice());
console.log(applePhones);


class Base<T> {
    data: T[];

    constructor() {
        this.data = [];
    }
}

class Department extends Base<Address> {
    data: Address[];

    constructor() {
        super();
        this.data = [];
    }

}
