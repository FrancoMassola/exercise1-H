import { Injectable } from '@angular/core';
//this service is used to obtain the token and send it in the request header
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
// import the service to implement the method that gives me the token
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  //instantiate the class AuthService
  constructor(private authService: AuthService) {}

  intercept(req, next) {
    //clone method to add more headers to the request
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`,
      },
    });
    return next.handle(tokenizeReq);
  }
}
