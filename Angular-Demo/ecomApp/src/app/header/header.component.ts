import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ecom-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HeaderComponent implements OnInit {

  header: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
