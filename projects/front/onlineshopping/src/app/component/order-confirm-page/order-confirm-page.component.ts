import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/model/order';
import { BasketService } from 'src/app/service/basket.service';
import { OrderService } from 'src/app/service/order.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-order-confirm-page',
  templateUrl: './order-confirm-page.component.html',
  styleUrls: ['./order-confirm-page.component.css']
})
export class OrderConfirmPageComponent implements OnInit {
  confirm: boolean = true;
  order: OrderModel = new OrderModel(0);

  constructor(private basketService: BasketService, private orderService: OrderService, private r: Router, private userService: UserService) { }

  ngOnInit() {
    this.order.basketProducts = this.basketService.basketProducts;
    let basketProducts = this.order.basketProducts;
    let totalPrice = 0;
    for (let index = 0; index < basketProducts.length; index++) {
      const o = basketProducts[index];
      totalPrice += o.count * o.product.price;
    }
    this.order.totalPrice = totalPrice;
  }
  onConfirmOrder() {


this.order.userId=this.order.basketProducts[0].product.userId;
    this.orderService.addOrder(this.order).subscribe(
      resp => {
        console.log(resp);
        this.basketService.basketProducts = [];
        this.r.navigate(['customer-page']);
        this.order.userId = this.userService.userId;
      }
    );



  }
}
