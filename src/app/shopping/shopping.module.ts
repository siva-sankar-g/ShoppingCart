import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from '../shared/service/auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { OrderSuccessComponent } from './component/order-success/order-success.component';
import { ProductFilterComponent } from './component/product-filter/product-filter.component';
import { ProductsComponent } from './component/products/products.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    ShoppingCartComponent,
    ProductsComponent,
    ProductFilterComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: "products", component: ProductsComponent },
      { path: "shoppingcart", component: ShoppingCartComponent },

      {
        path: "checkout",
        component: CheckoutComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "ordersuccess",
        component: OrderSuccessComponent,
        canActivate: [AuthGuardService],
      },
      {
        path: "my/orders",
        component: MyOrdersComponent,
        canActivate: [AuthGuardService],
      },
    ]),
    
  ],

  exports: [ProductsComponent, ShoppingCartComponent],
})
export class ShoppingModule {}
