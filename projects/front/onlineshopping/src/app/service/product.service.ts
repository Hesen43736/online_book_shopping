import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products:Product[]=[];
  selectedProductId:number=0;
  selectedP:Product=null;
  
  deleteById(id: number) {
    return this.http.delete(`${API_URL}/products/${id}`);
  }

  constructor(private http:HttpClient) { }


  addProduct(c:Product){
    return this.http.post<number>(`${API_URL}/products`,c);
  }

    findAll(){
    return this.http.get<Product[]>(`${API_URL}/products`); 
  }

  productsLoaded:boolean=false;
  findById(id: number) {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }

  findAllByUserId(userId:number){
    return this.http.get<Product[]>(`${API_URL}/products/user/${userId}`); 
  }

  findPartial(begin:number,length:number){
    return this.http.get<Product[]>(`${API_URL}/products/find-partial/${begin}/${length}`); 
  }


  findPartialSearch(begin:number,length:number,search:string){
    return this.http.get<Product[]>(`${API_URL}/products/find-partial/${begin}/${length}/${search}`); 
  }


}
