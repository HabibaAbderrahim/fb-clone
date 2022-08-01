import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {FacebookGuard} from "./guards/facebook.guard";

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./components/home/home.component').then(m => m.HomeComponent),
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
