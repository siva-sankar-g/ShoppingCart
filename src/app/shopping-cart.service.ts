import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireObject } from "@angular/fire/database";
import { take, map } from "rxjs/operators";
import { ItemsTotalCount } from './models/shopping-cart-item-count';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ShoppingCartService {

  constructor(private db: AngularFireDatabase) {}

  private createId() {
    return this.db.list("/shopping-cart").push({
      dateCreated: new Date().getTime(),
    });
  }

 async getCart() {
    let cartId = await this.getOrCreateId();
   return this.db.object('/shopping-cart/' + cartId ).valueChanges()
  }

 async getTotalCount():Promise<Observable<ItemsTotalCount>> {
    let cart$ = await this.getCart() as Observable<any>
    return cart$.pipe(map(cart => {
      return new ItemsTotalCount(cart.items)
    }))

  }

 private async getOrCreateId() {
    let cartId = localStorage.getItem("cartId");
    if (!cartId) {
      let result = await this.createId();
      localStorage.setItem("cartId", result.key);
      return result.key;
    } else return cartId;
  }

 private async getProduct(product){
    let cartId = await this.getOrCreateId();
    return this.db.object(
      "/shopping-cart/" + cartId + "/items/" + product.title  
    ) as AngularFireObject<any>;
  }

  async addToCart(product) {
    
    let item$ = await this.getProduct(product);
    item$
      .valueChanges()
      .pipe(take(1))
      .subscribe((item) => {
          if (item) item$.update({ quantity: item.quantity + 1 });
          else item$.set({ product : product, quantity : 1 })
      });
  }

  async removeFromCart(product) {
    let item$ = await this.getProduct(product);
    item$
      .valueChanges()
      .pipe(take(1))
      .subscribe((item) => {
          let quantity = item.quantity -1;
          if( quantity === 0)  item$.remove();
         else item$.update({ quantity : quantity });
      });
  }

 async clearCart() {
   let cartId = await this.getOrCreateId();
    this.db.object('/shopping-cart/' + cartId + '/items').remove();
  }

}
