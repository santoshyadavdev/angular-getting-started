import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  Host,
  OnInit,
  QueryList,
} from '@angular/core';
import { OrderComponent } from '../order/order.component';
import { ProductComponent } from '../product/product.component';
import { ProductService } from '../product/services/product.service';

@Component({
  selector: 'ecom-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  host : {
    'class' : 'ecom-container'
  },
  providers: [ProductService]
})
export class ContainerComponent implements OnInit, AfterContentInit {
  @ContentChild(ProductComponent) productComponent!: ProductComponent;

  @ContentChildren(OrderComponent) orderComponent!: QueryList<OrderComponent>;

  constructor(@Host() private productService: ProductService) {}

  ngOnInit(): void {
    console.log(this.productComponent);
  }

  ngAfterContentInit() {
    console.log('After content is called');

    console.log(this.productComponent);
    console.log(this.orderComponent);
    for(let order of this.orderComponent) {
      order.orderTitle = 'New Title';
    }
  }
}
