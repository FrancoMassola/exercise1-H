import { Component, OnInit } from '@angular/core';
//import the service class
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
  //create an object to manipulate the loaded admin data  
  admin = {
    username: '',
    password: ''
  }
//generate the instance of the class
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  singIn(){
    //admin object is sent to service
    this.authService.singIn(this.admin)
    .subscribe(
      res =>{
        console.log(res)
        //add token to localstorage
        localStorage.setItem('token',res.token);
        
      },
        err => console.log(err)
      
    )
    
  }

}
