import { Component, OnInit } from '@angular/core';
//import the user service
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  users = [];

  constructor(private usersService: UsersService) {}

  //implement pagination - p = currentPage
  p: number = 1;

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(
      (res) => {
        console.log(res);
        //access the users array of the response json object
        this.users = res['users'];
      },
      (err) => console.log(err)
    );
  }
}
