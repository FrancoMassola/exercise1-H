import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  singIn(){
    console.log(this.admin);
    
  }

}
