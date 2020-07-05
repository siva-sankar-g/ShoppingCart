import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';

@Component({
  selector: 'ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.css']
})
export class OrderedItemsComponent implements OnInit {
  orderDetails$;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderDetails$ = this.orderService.getOrders()
  }

}
