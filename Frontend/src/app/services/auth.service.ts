import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
//import router
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//use Http property to request data
//connect Front to Backend
private URL = 'http://localhost:3000/'

  constructor(private http: HttpClient, private router: Router) { }
  //make the request to the server
  singIn(admin){
    //send the admin object through the post method to the backend
    return this.http.post<any>(this.URL + 'auth/login', admin);
  }

  //method to verify that the user is logged in
  loggedIn(){
    //if the local storage contains the token
    //return true or false
    return !!localStorage.getItem('token');

    }

    //method to obtain the token
    getToken() {
      return localStorage.getItem('token');
    }

    //implements admin logout -- delete token
    logout() {
      localStorage.removeItem('token');
      this.router.navigate(['auth/login']);
    }

  }

