import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    let result: boolean = false;
    let user: string = this.userService.username;
    
    if (user !== '') {
      result = true;
    } else {
      result = false;
      this.router.navigate(['login']);
    }



    return result;

  }
  constructor(private router: Router,private userService:UserService) { }
}
