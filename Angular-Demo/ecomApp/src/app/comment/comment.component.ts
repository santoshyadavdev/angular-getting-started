import { Component, OnInit, SkipSelf } from '@angular/core';
import { ProductService } from '../product/services/product.service';
import { CommentService } from './comment.service';
import { Util } from './employee';

@Component({
  selector: 'ecom-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  host: {
    class: 'ecom-comment',
  },
})
export class CommentComponent implements OnInit {
  comments = [1, 2, 3];

  comment = '';

  // commentService = new CommentService();

  constructor(
    private commentService: CommentService,
   @SkipSelf() private productService: ProductService
  ) {}

  ngOnInit(): void {
    // this.util.add(10,5);
    this.comment = this.commentService.getComment();
  }

  addProduct() {
    this.productService.addProduct(
      { id: 4, name: 'LG', mfd: new Date('1-Jan-2017'), price: 25000 },
      )
  }
}
