import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { BasketService } from 'src/app/service/basket.service';
import { MatDialog } from '@angular/material';
import { BasketComponent } from '../basket/basket.component';

@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
productCount:number=0;
  constructor(public productService:ProductService,public basketService:BasketService,private matDialog:MatDialog) { }

  ngOnInit() {
    if(this.productService.productsLoaded===false){
      this.productService.findPartial(this.begin,this.length).subscribe(
        resp=>{
          this.productService.products=resp;
          this.productService.productsLoaded=true;
        }
      );

    }else{

    }
    this.basketService.productCountChanged.subscribe(
      resp=>{
        this.showBasket=false;
setTimeout(
  ()=>{
    this.showBasket=true;
  },200
);
        this.productCount=resp;

      }
    );

  }
  showBasket:boolean=true;

  onOpenBasket(){
this.matDialog.open(BasketComponent);
 
}
begin :number=0;
length :number=10 
  onScroll(){
    this.begin+=10;
    this.productService.findPartial(this.begin,this.length).subscribe(
      resp=>{
        this.productService.products.push(...resp);
        
      }
    );
  }
}
