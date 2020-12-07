import { Component, OnInit } from '@angular/core';
//import the user service
import {UsersService} from '../../services/users.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
    .subscribe(
      res =>{
        console.log(res);
        this.users = res;
      },
      err => console.log(err)
      

    )
  }


}
