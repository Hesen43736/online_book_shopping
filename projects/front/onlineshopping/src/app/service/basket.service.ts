import { Injectable, EventEmitter } from '@angular/core';
import { BasketProduct } from '../model/basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

 basketProducts:BasketProduct[]=[];

 productCountChanged =new EventEmitter<number>();

  constructor() { }


getProductCount():number{
let count=0;

for (let index = 0; index < this.basketProducts.length; index++) {
  const b = this.basketProducts[index];
  count+=b.count;
}

return count;
}



}
