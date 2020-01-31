import { Injectable } from '@angular/core';
import { UserInfo, UserResponse,  } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants';

import { User } from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

checkUser(username:string){


  return this.http.post<boolean>(`${API_URL}/users/check-exists`,username);
}
createUser(user:User){


  return this.http.post<User>(`${API_URL}/users`,user);
}
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
