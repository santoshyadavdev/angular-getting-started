import { Component } from '@angular/core';

@Component({
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  // template: `<h1>Hello World</h1>
  //   <div>from Template</div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecomApp';


  role= 'Admin';


}
