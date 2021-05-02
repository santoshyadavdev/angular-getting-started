import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecom-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  orderTitle = 'Order Places';

  constructor() { }

  ngOnInit(): void {
  }

}
