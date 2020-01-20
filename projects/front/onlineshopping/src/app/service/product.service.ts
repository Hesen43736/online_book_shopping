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


}
