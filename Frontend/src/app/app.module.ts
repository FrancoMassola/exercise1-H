import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import model to manipulate form data
import {FormsModule} from '@angular/forms'
//to use the http module in the services
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './components/singup/singup.component';
import { SinginComponent } from './components/singin/singin.component';
import { ListComponent } from './components/list/list.component';
//import the class Guard
import {AuthGuard} from '../app/auth.guard' 

@NgModule({
  declarations: [
    AppComponent,
    SingupComponent,
    SinginComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  //guard class is used in providers
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
