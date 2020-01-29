import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
import { OrderModel } from 'src/app/model/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders:OrderModel[]=[];
  constructor(private oo:OrderService) { }

  ngOnInit() {
    this.oo.findAll().subscribe(
      resp=>{
        this.orders=resp;
      }
    );
      }
    
    }
