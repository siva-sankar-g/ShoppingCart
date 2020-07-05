import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../shared/service/product.service';
import { Product } from '../../../shared/models/product';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../../../shared/service/shopping-cart.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnDestroy,OnInit  {

  products:Product[] = [];
  filteredProducts: Product[] = [];
  category: string;
  activatedCategorySubscription : Subscription;
  cartSubscription : Subscription;
  shoppingCart = {};

  constructor(
    route : ActivatedRoute,
    productService: ProductService,
    private cartService : ShoppingCartService
    ) { 

     this.activatedCategorySubscription = productService.getAllList()
      .pipe(switchMap(products => {
        this.products = products as Product[];
        return route.queryParamMap
      }))
      .subscribe(param => {
        this.category = param.get('category');
        this.filteredProducts = (this.category )?
        this.products.filter(product => (product.category === this.category )) 
        : this.products;
      })
  }

  async ngOnInit() {
    let cart = await this.cartService.getCart();
    this.cartSubscription = cart.subscribe(item =>this.shoppingCart = item);
  }


  ngOnDestroy() {
    this.activatedCategorySubscription.unsubscribe();
    this.cartSubscription.unsubscribe()
  }

}
