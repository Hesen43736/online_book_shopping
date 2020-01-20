import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../model/category';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  deleteById(id: number) {
    return this.http.delete(`${API_URL}/categories/${id}`);
  }

  constructor(private http:HttpClient) { }


  addCategory(category:Category){
    return this.http.post<number>(`${API_URL}/categories`,category);
  }

    findAll(){
    return this.http.get<Category[]>(`${API_URL}/categories`); 
  }

}
