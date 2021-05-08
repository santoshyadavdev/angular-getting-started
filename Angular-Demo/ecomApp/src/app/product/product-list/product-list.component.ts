import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'ecom-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductListComponent implements OnInit, OnChanges, OnDestroy {
  @Input() products: Product[] = [];

  @Input() title: string = '';

  @Output() selectProduct = new EventEmitter<Product>();

  productSum = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.products) {
      this.productSum = changes.products.currentValue
        .map((product: Product) => product.price)
        .reduce((a: number, b: number) => a + b);
    }
  }

  ngOnInit(): void {}

  select(product: Product) {
    this.selectProduct.emit(product);
  }

  trackById(i: number, data: Product) {
    return data.id;
  }

  ngOnDestroy() {
    console.log('this component is destroyed');
  }
}
