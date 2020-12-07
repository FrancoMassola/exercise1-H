import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
//use Http property to request data
//connect Front to Backend
private URL = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }
  //make the request to the server
  singIn(admin){
    //send the admin object through the post method
    return this.http.post<any>(this.URL + 'auth/login', admin);
  }
}
