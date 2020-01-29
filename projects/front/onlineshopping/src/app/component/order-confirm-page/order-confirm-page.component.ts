import { Component, OnInit } from '@angular/core';
import { OrderModel } from 'src/app/model/order';
import { BasketService } from 'src/app/service/basket.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-confirm-page',
  templateUrl: './order-confirm-page.component.html',
  styleUrls: ['./order-confirm-page.component.css']
})
export class OrderConfirmPageComponent implements OnInit {
  confirm: boolean = true;
  order:OrderModel=new OrderModel(0);

  constructor(private basketService:BasketService,private orderService:OrderService) { }

  ngOnInit() {
    this.order.basketProducts=this.basketService.basketProducts;
let basketProducts=this.order.basketProducts;
let totalPrice=0;
    for (let index = 0; index < basketProducts.length; index++) {
      const o = basketProducts[index];
      totalPrice+=o.count*o.product.price;
    }
 this.order.totalPrice=totalPrice;
  }
  onConfirmOrder(){ 

    
  
  this.orderService.addOrder(this.order).subscribe(
    resp=>{
      console.log(resp);
      this.basketService.basketProducts=[];
    }
  );



  }
}
