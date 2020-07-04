import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  object$;

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product)
  }

  getAll()  {
    return this.db.object('/products').valueChanges();
  }
  getAllList() {
  let list =  this.db.list('/products');
  return list.valueChanges();
  }
 
  get(productId) {
    return this.db.object('/products/' + productId).valueChanges()
  }

  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    return this.db.object('/products/' + productId).remove();
  }

}
