import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { BasketService } from 'src/app/service/basket.service';
import { MatDialog } from '@angular/material';
import { BasketComponent } from '../basket/basket.component';
import { Product } from 'src/app/model/product';
import { HttpClient } from '@angular/common/http';
import { Customer } from 'src/app/model/customer';


@Component({
  selector: 'app-customer-page',
  templateUrl: './customer-page.component.html',
  styleUrls: ['./customer-page.component.css']
})
export class CustomerPageComponent implements OnInit {
  students:string[]=[];
productCount:number=0;
productss:Product[]=[];
customer:Customer[]=[];
  constructor(public productService:ProductService,private http:HttpClient,public basketService:BasketService,private matDialog:MatDialog) { }

  ngOnInit() {
    if(this.productService.productsLoaded===false){
      this.productService.findPartial(this.begin,this.length).subscribe(
        resp=>{
          this.productService.products=resp;
         
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
    this.productService.findPartialSearch(this.begin,this.length,this.searchText).subscribe(
      resp=>{
        this.productService.products.push(...resp);
        
      }
    );
  }
  productsCopy:string[]=[]
  searchText:string='';
  onSearch(){
this.loadProductSearch();
}
loadProductSearch() {
  this.begin=0;
  this.productService.findPartialSearch(this.begin,this.length,this.searchText).subscribe(
    resp=>{
      this.productService.products=resp;
     
    }
  );
}
}
