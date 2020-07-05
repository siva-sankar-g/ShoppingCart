import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminAuthGuardService } from 'src/app/admin/service/admin-auth-guard.service';
import { AuthGuardService } from 'src/app/shared/service/auth-guard.service';

import { SharedModule } from '../shared/shared.module';
import { AdminOrdersComponent } from './component/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './component/admin-products/admin-products.component';
import { ProductFormComponent } from './component/product-form/product-form.component';

@NgModule({
  declarations: [
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
  ],

  
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "adminproducts/new",
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },

      {
        path: "adminproducts/:id",
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },

      {
        path: "adminproducts",
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },

      {
        path: "adminorders",
        component: AdminOrdersComponent,
        canActivate: [AuthGuardService, AdminAuthGuardService],
      },
    ]),
  ],

  exports: [
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductFormComponent,
    SharedModule
  ],
})
export class AdminModule {}
