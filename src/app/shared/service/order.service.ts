import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class OrderService {
  constructor(private db: AngularFireDatabase) {}

  placeOrder(order) {
    return this.db.list("/order").push(order);
  }

  getOrders() {
    return this.db.object("/order").valueChanges();
  }
  getOrderDetails(id: string) {
    return this.db
      .object("/order/" + id)
      .valueChanges()
      .pipe(map((order: any) => Object.values(order.products)))
  }
}
