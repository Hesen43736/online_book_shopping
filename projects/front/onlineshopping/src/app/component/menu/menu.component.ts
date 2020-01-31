import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  canSeeProducts(): boolean {
    let result: boolean = false;
    if (this.userService.username=='') {
      result = true;
    }

    return result;
  }




  canSeeCustomerPage(): boolean {
    let result: boolean = false;
    if (this.userService.userGrants.includes('customer_page')) {
      result = true;
    }

    return result;
  }
  canSeeAdminPage(): boolean {
    let result: boolean = false;
    if (this.userService.username=='') {
      result = true;
    }

    return result;
  }


  isUserLoggedIn() {
    if (this.userService.username == '') {
      return false;
    } else {
      return true;
    }
  }
}
