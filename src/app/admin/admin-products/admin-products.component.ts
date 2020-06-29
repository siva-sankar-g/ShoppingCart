import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnDestroy {
  productList;
  product;
  subscription: Subscription;

  constructor(private productService: ProductService) {
   this.subscription = this.productService.getAll()
    .subscribe( product => {
     this.product = this.productList = Object.entries(product);
    })
   }

 filter(query : string) {
   this.productList = (query)?
   this.productList.filter(([key,value]) => {
     return value.title.toLowerCase().includes(query.toLowerCase())
   }) : this.product
 }
   

 ngOnDestroy() {
    this.subscription.unsubscribe();
 }

}
