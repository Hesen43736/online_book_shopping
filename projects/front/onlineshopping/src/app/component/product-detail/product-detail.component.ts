import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';
import { API_URL } from 'src/app/constants';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product:Product=new Product(0);
downloadPath:string;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.downloadPath=API_URL+'/filedownload/files/';
    this.productService.findById(this.productService.selectedProductId).subscribe(
      resp=>{
        this.product=resp;
      }
    );
  }

}
