import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/service/basket.service';
import { BasketProduct } from 'src/app/model/basket';
import { DOWNLOAD_URL } from 'src/app/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketProducts:BasketProduct[]=[]; 
  download:string='';
  constructor(private basketService:BasketService,private router:Router) { }

  ngOnInit() {
    this.basketProducts=this.basketService.basketProducts;
    this.download=DOWNLOAD_URL;
  }

  onCountChanged(){
    this.basketService.productCountChanged.emit(this.basketService.getProductCount());
  }

  onRemoveProduct(counter:number){
this.basketProducts.splice(counter,1);
  }

  getAllProductPrice():number{
let totalPrice:number=0;
for (let index = 0; index < this.basketProducts.length; index++) {
  const b = this.basketProducts[index];
  totalPrice+=b.count*b.product.price;
  
}
return totalPrice;
  }

  onConfirmOrder(){
    this.router.navigate(['order-confirm']);
  }
}
