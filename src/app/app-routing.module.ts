import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {FacebookGuard} from "./guards/facebook.guard";
import {HomeModule} from "./components/home/home.module";

const routes: Routes = [
  {
    path:'home',
    //MODULE1
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule),
    //Angural access not anyone can get into Home
    canActivate:[FacebookGuard]

  },

  {
    path:'login',
    component:LoginComponent
  },

  {
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
