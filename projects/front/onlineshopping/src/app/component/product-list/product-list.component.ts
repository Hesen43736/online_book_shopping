import { Component, OnInit } from '@angular/core';
import { MatDialog, Sort } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { DOWNLOAD_URL } from 'src/app/constants';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:Product[]=[];
download:string='';

  constructor(private matDialog:MatDialog,private productService:ProductService,private userService:UserService) { }

  ngOnInit() {
    this.loadProducts();
    this.download=  DOWNLOAD_URL;
  }

  onAddProduct(){
let dialog=this.matDialog.open(AddProductComponent);
dialog.afterClosed().subscribe(
  resp=>{
    //console.log('mehsul qeydiyyati penceresi baglandi');
this.loadProducts();

  }
);
  }
  loadProducts() {
    this.productService.findAllByUserId(this.userService.userId).subscribe(
      resp=>{
        this.products=resp;
      }
    );
  }

}
