import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../service/shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product : Product;
  @Input('show-action') showAction = true;
  @Input('cardwidth') cardwidth = false;
  @Input('shoppingCart') shoppingCart;
  productQuantity: number;
 

  constructor(private cartService: ShoppingCartService) { }

  addToCart(product : Product) {
   this.cartService.addToCart(product);
  }

  getquantity() {
    if(this.shoppingCart.items) {
      let product = this.shoppingCart.items[this.product.title];
      if(product)
        return this.productQuantity = product.quantity;
    }
    return 0;
  }
  
}
