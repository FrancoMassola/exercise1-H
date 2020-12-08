import { Component, OnInit } from '@angular/core';
//import the service class
import {AuthService} from '../../services/auth.service'
//Import Router module
import{Router} from '@angular/router'


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
  constructor(private authService: AuthService,
              private router: Router      
    ) { }

  ngOnInit(): void {
  }

  async singIn(){
    //admin object is sent to service
    this.authService.singIn(this.admin)
    .subscribe(
      res =>{
        console.log(res)
        //validate navigation respect to the admin data
        if (res.token == undefined){
          this.router.navigate(['/users']);
        }
        else{
          //add token to localstorage
        localStorage.setItem('token',res.token);
        //redirect to 
        this.router.navigate(['/users']);
        }
        
      },
        err => console.log(err.error["message"])
      
    )
    
  }

}
