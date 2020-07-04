import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'cart-items-add',
  templateUrl: './cart-items-add.component.html',
  styleUrls: ['./cart-items-add.component.css']
})
export class CartItemsAddComponent implements OnInit {

  @Input('product') product;
  @Input('quantity') quantity;

  constructor(private cartService: ShoppingCartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addToCart(this.product);
  }
  removeFromCart() {
    this.cartService.removeFromCart(this.product)
  }

}
