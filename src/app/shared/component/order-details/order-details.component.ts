import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderService } from '../../service/order.service';

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.css"],
})
export class OrderDetailsComponent implements OnInit {
  orderDetails$: Observable<any>;
  id;

  constructor(
    private rotue: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.id = this.rotue.snapshot.paramMap.get("id");
    console.log(this.id);
    this.orderDetails$ = this.orderService.getOrderDetails(this.id); 
  }
}
