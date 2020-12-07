import { Component, OnInit } from '@angular/core';
//import the user service
import {UsersService} from '../../services/users.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userList = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers()
    .subscribe(
      res =>{
        console.log(res);
        this.userList = res;
      },
      err => console.log(err)
      

    )
  }


}
