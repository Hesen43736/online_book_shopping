import { Component, OnInit, ViewChild ,OnDestroy} from '@angular/core';
import { MatDialog, Sort } from '@angular/material';
import { AddProductComponent } from '../add-product/add-product.component';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';
import { DOWNLOAD_URL } from 'src/app/constants';
import { AgGridAngular } from 'ag-grid-angular';
 
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , OnDestroy{
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
productCopy:string[]=[];
download:string='';
counter:number=0
dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
name:string='';
saveButtonText:string='Add';
saveMode:string='add'
products:Product[]=[];
  constructor(private r:Router,private matDialog:MatDialog,private productService:ProductService,private userService:UserService) { }

  ngOnInit() { this.dtOptions = {
    pagingType: 'full_numbers',
    pageLength: 10,
    processing: true
  };
    this.loadProducts();
    this.download=  DOWNLOAD_URL;
    this.products=this.productService.products;
  }
  
  onProductDelete(counter:number){
    this.products.splice(counter,1);
    }

  searchText: string = '';
  
  quickSearch() {
      this.gridApi.setQuickFilter(this.searchText);
  }
  

  private gridApi;

  onAddProduct(){this.productService.selectedP=null;
let dialog=this.matDialog.open(AddProductComponent);
dialog.afterClosed().subscribe(
  resp=>{
    //console.log('mehsul qeydiyyati penceresi baglandi');
this.loadProducts2();

  }
);
  }
  loadProducts() {
    this.productService.findAllByUserId(this.userService.userId).subscribe(
      resp=>{
        this.products=resp;  this.dtTrigger.next();
      }
    );
  }
  loadProducts2() {
    this.r.navigate(['fake']);
  }
  update(p:Product){
this.productService.selectedP=p;
this.matDialog.open(AddProductComponent)
  }
}

