import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
