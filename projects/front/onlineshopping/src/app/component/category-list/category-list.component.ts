import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
categories:Category[]=[];
  constructor(private categoryService:CategoryService) { }
category:Category=new Category(0,'');
  ngOnInit() {
    // this.categories.push(new Category(1,'Heyvanlar'));
    // this.categories.push(new Category(2,'Nəqliyyat'));
   this.loadCategories();
  }
  loadCategories() {
    this.categoryService.findAll().subscribe(
      resp=>{
        this.categories=resp;
      },error=>{
        console.log(error);
      }
    );
  }


  categorySelected(id:number,counter:number){
this.saveButtonText='Yadda saxla';
this.category.name=this.categories[counter].name;
this.category.id=this.categories[counter].id;
  }

  saveButtonText:string='Əlavə et';
  saveCategory(){
    if(this.category.id===0){
      
       
      this.categoryService.addCategory(this.category).subscribe(
        resp=>{
console.log(resp); this.loadCategories();
        },error=>{
          console.log(error);
        }
      );
    }else{
      
      this.categoryService.addCategory(this.category).subscribe(
        resp=>{
console.log(resp); this.loadCategories();
        },error=>{
          console.log(error);
        }
      );
      
    }
    this.category=new Category(0,'');
    this.saveButtonText='Əlavə et';
   
  }

  errorMessage="Fill inputs***";

  deleteCategory(){
    if(this.category.id===0){
      alert('secim edin');
    }else{
      this.categoryService.deleteById(this.category.id).subscribe(
        resp=>{
          console.log(resp);
          this.loadCategories();this.category.id=0;
          this.category.name='';
          this.saveButtonText='Əlavə et';
        },error=>{
          console.log(error);
        }
      );
    }
  }
}
