import { Component, OnInit } from '@angular/core';
import { Util } from './employee';

@Component({
  selector: 'ecom-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  host: {
    'class' : 'ecom-comment'
  }
})
export class CommentComponent implements OnInit {
  comments = [1, 2, 3];

  // util = new Util();

  constructor() {}

  ngOnInit(): void {
    // this.util.add(10,5);
  }
}
