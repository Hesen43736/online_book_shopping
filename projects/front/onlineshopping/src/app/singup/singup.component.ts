import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
user:User=new User();
  constructor(private dd:UserService) { }

  ngOnInit() {
  }
  
signup(){
this.dd.checkUser(this.user.username).subscribe(
resp=>{
  let result:boolean=resp;
  if(result){
alert('Bu istifadəçi artıq mövcuddur');
  }else{
    this.dd.createUser(this.user).subscribe(
      response=>{
        console.log("user created :"+response);
        alert('istifadəçi qeydiyyati ugurlu oldu');
      }
      );
    
  }
}
);
}


}
