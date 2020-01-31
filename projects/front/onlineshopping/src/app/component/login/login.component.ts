import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo, UserResponse } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { SingupComponent } from 'src/app/singup/singup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private matD:MatDialog, private userService: UserService,private router:Router) { }

  ngOnInit() {
  }
openSignupWindow(){
  this.matD.open(SingupComponent);
}

  username: string = '';
  password: string = '';


  onLogin() {

    let userInfo: UserInfo = new UserInfo(this.username, this.password);
    this.userService.validateUser(userInfo).subscribe(
      resp => {
        if (resp.validated) {
          if (resp.enabled) {


            this.userService.username=userInfo.username;
this.userService.userId=resp.id;
            console.log(resp);
           

            this.router.navigate(['main-page']);



          } else {
            this.message = 'user is deactivated';
          }
        } else {
          alert("Bu istifadeci qeydiyyat olunmayib");
        }
      }
    );


  }
  message: string = '';
  
}



