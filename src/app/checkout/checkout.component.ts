import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cart$;
  items;
  userId;
  cartSubscription : Subscription;
  userSubscription : Subscription;

  constructor(
    private auth: AngularFireAuth,
    private orderService: OrderService,
    private cartService: ShoppingCartService, 
    private router: Router) { }

 async ngOnInit() {
    this.cart$ = await this.cartService.getTotalCount();
    this.cartSubscription = this.cart$.subscribe(item => this.items = item);
    this.userSubscription = this.auth.user.subscribe(user => this.userId = user.uid);
  }

  placeOrder(formdata) {

    let order = {
      userId : this.userId,
      shipping : formdata,
      products : this.items.items,
      totalquantity : this.items.totalcount,
      totalprice : this.items.totalprice,
      orderdate : new Date().getTime()
    }
    this.orderService.placeOrder(order)
    this.cartService.clearCart();
    this.router.navigate(['/ordersuccess']);
  
    console.log(order);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

}
