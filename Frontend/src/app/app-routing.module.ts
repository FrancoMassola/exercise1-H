import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import Components
import {ListComponent} from './components/list/list.component'
import {SinginComponent} from './components/singin/singin.component'
import {SingupComponent} from './components/singup/singup.component'

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
  component: ListComponent
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
