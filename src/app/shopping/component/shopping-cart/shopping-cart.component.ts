import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../shared/service/shopping-cart.service';
import { Observable } from 'rxjs';
import { ItemsTotalCount } from '../../../shared/models/shopping-cart-item-count';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart$ :Observable<ItemsTotalCount>;
  

  constructor(private cartService: ShoppingCartService) { }

 async ngOnInit() {
    this.cart$ = await this.cartService.getTotalCount()
  }

  clearTotalCart() {
    this.cartService.clearCart();
  }

  }


