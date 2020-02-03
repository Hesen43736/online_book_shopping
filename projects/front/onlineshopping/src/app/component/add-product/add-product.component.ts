import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';
import { Product, City } from 'src/app/model/product';
import { CityService } from 'src/app/service/city.service';
import { ProductService } from 'src/app/service/product.service';
import { UploadService } from 'src/app/service/upload.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  categories:Category[]=[];cities:City[]=[];
product:Product=new Product(0);
  constructor(private categoryService:CategoryService,private cityService:CityService,private productService:ProductService,private uploadService:UploadService,private userService:UserService) { }

  ngOnInit() {
    if(this.productService.selectedP==null){

    }else{
      this.product=this.productService.selectedP;
    }
    
this.categoryService.findAll().subscribe(
  resp=>{
    this.categories=resp;
     
  }
);
this.cityService.findAll().subscribe(
  resp=>{
    this.cities=resp;
     
  }
);



  }
  errorMessage:string='Məlumatları tam yazın';
  saveProduct(){
    
    this.uploadService.upload(this.image).subscribe(
resp=>{
  this.product.image=resp.image;
  this.product.userId=this.userService.userId;
   this.productService.addProduct(this.product).subscribe(

    resp=>{
      console.log(resp);
      alert('success registration');
    }

    );
}
     
    );
    
  }
image:File;
  imageSelected(event){
this.image=(<File[]>event.target.files)[0];
// Object o=new Animal();
if(this.image==undefined){
  this.image=null;
  console.log('image selection cancelled');
}else{
  console.log('image selected');
}
  }
}
