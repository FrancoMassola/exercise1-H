import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import Components
import {ListComponent} from './components/list/list.component'
import {SinginComponent} from './components/singin/singin.component'
import {SingupComponent} from './components/singup/singup.component'
//import Guard
import {AuthGuard} from '../app/auth.guard'

//create application routers
const routes: Routes = [
{
  //when the user path is visited, the component ListComponente is rendered
  path: 'auth/login',
  component: SinginComponent
},
{
  //when the "root" path is visited, redirects to user path, with pathMatch: 'full' automatically
  path: '',
  redirectTo: '/auth/login',
  pathMatch: 'full'
},
{
  path: 'users',
  component: ListComponent,
  //implement the Guard on the property canActivated for the /user route, if the token exist
  canActivate: [AuthGuard]
},
{
  path: 'singup',
  component: SingupComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
