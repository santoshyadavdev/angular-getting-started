import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './product/product-list/product-list.component';
import { OrderComponent } from './order/order.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
import { CommentComponent } from './comment/comment.component';
import { ProductService } from './product/services/product.service';
import { APPCONFIG, CONFIGVALUES } from './injection-token/app.config.token';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    OrderComponent,
    ContainerComponent,
    HeaderComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    {
      provide : APPCONFIG,
      useValue : CONFIGVALUES
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
