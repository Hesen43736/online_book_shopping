import { Injectable } from '@angular/core';
import { UserInfo, UserResponse, UserGrant } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


 username:string='';
userGrants:string[]=[];
userId:number=0;
 setUsername(username:string){
this.username=username;
 }

 validateUser(userInfo:UserInfo){
   return this.http.post<UserResponse>(`${API_URL}/users/validate`,userInfo);
 }


}
