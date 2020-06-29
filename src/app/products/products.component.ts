import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { CategoryService } from '../category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy  {

  products:Product[];
  categories;
  productSubscription : Subscription;
  categorySubscription : Subscription;

  constructor(
    private productService: ProductService,
    private categoryService : CategoryService
    ) { 
   this.productSubscription = this.productService.getAllList()
    .subscribe(products => this.products=products as Product[] )

   this.categorySubscription = this.categoryService.Categories
    .subscribe(category => this.categories = category )
  }

  ngOnDestroy() {
    this.productSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
  }

}
