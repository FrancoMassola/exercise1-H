import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import model to manipulate form data
import {FormsModule} from '@angular/forms'
//to use the http module in the services
import {HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingupComponent } from './components/singup/singup.component';
import { SinginComponent } from './components/singin/singin.component';
import { ListComponent } from './components/list/list.component';
//import this module for pagination
import {NgxPaginationModule} from 'ngx-pagination';
//import the class Guard
import {AuthGuard} from '../app/auth.guard' 

//import the class of the token-interceptor service
import {TokenInterceptorService} from '../app/services/token-interceptor.service'

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
    HttpClientModule,
    NgxPaginationModule
  ],
  //guard class is used in providers
  providers: [
    AuthGuard,
    //add the intercepting method of the interceptor token service to implement it in all requests, is implemented as a provider
    //the new header is implemented in all requests
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
