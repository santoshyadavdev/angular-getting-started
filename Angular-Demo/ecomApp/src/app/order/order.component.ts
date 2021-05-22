import { Component, OnInit } from '@angular/core';
import { NewProductService } from '../product/services/new-product.service';

@Component({
  selector: 'ecom-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderTitle = 'Order Places';

  constructor(private newProductService: NewProductService) { }

  ngOnInit(): void {
  }

}
