//add guard to protect routes
import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
//import the full service
import {AuthService} from '../app/services/auth.service'
//import routes
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
 
  //generate the constructor and instantiate the service
constructor(private authService: AuthService, 
            private router: Router ){

}
  
  canActivate(): boolean{
    //If the token exists in the localstorage return true
    if (this.authService.loggedIn()) {
      return true;
    }
    //otherwise is redirected to the login 
    this.router.navigate('/auth/login');
    return false;
  }
  
}
