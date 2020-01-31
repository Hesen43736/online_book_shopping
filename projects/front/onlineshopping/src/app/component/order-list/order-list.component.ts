import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { OrderModel } from 'src/app/model/order';
import { UserService } from 'src/app/service/user.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders:OrderModel[]=[];
  constructor(private oo:OrderService,private userService:UserService) { }
  ngOnDestroy(): void {
    
  }
   
  ngOnInit() {
    this.loadProducts();
    
      }
      
      loadProducts() {
        this.oo.findAllByUserId(this.userService.userId).subscribe(
          resp=>{
            this.orders=resp;   
          }
        );
      }
    }
