import { Injectable } from '@angular/core';
//this service is implemented to obtain the users
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  //use Http property to request data
  private URL = 'http://localhost:3000/api/users';
  constructor(private http: HttpClient) {}

  //declare method to make the request
  getUsers() {
    return this.http.get<any>(this.URL);
  }
}
