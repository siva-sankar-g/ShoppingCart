import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';

import { CartItemsAddComponent } from './component/cart-items-add/cart-items-add.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { OrderedItemsComponent } from './component/ordered-items/ordered-items.component';
import { RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './component/order-details/order-details.component';



@NgModule({
  declarations: [
    ProductCardComponent,
    CartItemsAddComponent,
    OrderedItemsComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule,
    RouterModule.forChild([
      {
        path : 'order/details/:id',
        component : OrderDetailsComponent
      }
    ])
  ],
  exports : [
    ProductCardComponent,
    CartItemsAddComponent,
    OrderedItemsComponent,
    OrderDetailsComponent,

    FormsModule,
    CustomFormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgbModule
  ]
})
export class SharedModule { }
