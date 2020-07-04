
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { ShoppingCartService } from '../shopping-cart.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  appUser : any;
  cart$: Observable<any>

  constructor(
    public auth : AuthService, 
    private cartService: ShoppingCartService
     ) { 
    auth.appUser$.subscribe( appuser => this.appUser = appuser )
  }

  logout() {
    this.auth.logout()
  }

  async ngOnInit() {
   this.cart$ = await this.cartService.getTotalCount();
  }

 

 
}
