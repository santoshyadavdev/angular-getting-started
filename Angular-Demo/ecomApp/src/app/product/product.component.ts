import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnInit,
  Optional,
  QueryList,
  Self,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LoggerService } from '../logger/logger.service';
import { Product } from './product';
import { ProductService } from './services/product.service';

@Component({
  // interpolation: ['[', ']'],
  selector: 'ecom-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'ecom-product',
  },
  // providers: [ProductService],
})
export class ProductComponent
  implements OnInit, DoCheck, AfterViewInit, AfterViewChecked
{
  title = 'Product Information';

  productName = 'One Plus 9';

  visible = false;

  hidden = true;

  selectedProduct: Partial<Product> = {};

  productList: Product[] = [];

  header = 'Product List';

  previousValue = '';

  currentValue = '';

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent)
  headerChildrenComponent!: QueryList<HeaderComponent>;

  @ViewChild('apiError', { static: true }) errorDiv!: ElementRef<any>;
  constructor(
  private productService: ProductService,
    @Optional() private logService: LoggerService
  ) {}

  ngOnInit() {
    // this.productService.add(10,5);
    // this.logService? this.logService.log('test')
    console.log(this.headerComponent);
    console.log(this.errorDiv);
    this.productList = this.productService.getProducts();
  }

  ngDoCheck() {
    // console.log('do check is called');
  }

  ngAfterViewInit(): void {
    this.previousValue = this.headerComponent.header;
    this.headerChildrenComponent.last.header = 'This is last Header Component';
  }

  ngAfterViewChecked(): void {
    this.currentValue = 'New Header';
    if (this.previousValue != this.currentValue) {
      this.headerComponent.header = this.currentValue;
    }
  }

  toggle() {
    this.visible = !this.visible;
    this.errorDiv.nativeElement.innerText =
      'There is an error making API call, please retry.';
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
