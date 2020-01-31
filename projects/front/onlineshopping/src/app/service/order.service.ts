import { Injectable, EventEmitter } from '@angular/core';
import { BasketProduct } from '../model/basket';
import { HttpClient } from '@angular/common/http';
import { OrderModel } from '../model/order';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders:OrderModel[]=[];
  

  constructor(private http:HttpClient) { }


addOrder(order:OrderModel) {
 return this.http.post<OrderModel>(`${API_URL}/orders`,order);
}
findAll ( ){
  return this.http.get<OrderModel[]>(`${API_URL}/orders`);
}
findAllByUserId(userId:number){
  return this.http.get<OrderModel[]>(`${API_URL}/orders/user/${userId}`); 
}

}
