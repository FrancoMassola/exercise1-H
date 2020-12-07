import { Component } from '@angular/core';
//import the authService service to use it in the view
import {AuthService} from '../app/services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend'
 constructor(public authService: AuthService){

 }
}
