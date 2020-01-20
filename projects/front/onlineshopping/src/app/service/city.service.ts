import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { HttpClient } from '@angular/common/http';
import { City } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  deleteById(id: number) {
    return this.http.delete(`${API_URL}/cities/${id}`);
  }

  constructor(private http:HttpClient) { }


  addCity(c:City){
    return this.http.post<number>(`${API_URL}/cities`,c);
  }

    findAll(){
    return this.http.get<City[]>(`${API_URL}/cities`); 
  }
}
