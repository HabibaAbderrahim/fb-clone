import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeComponent} from "./home.component";
import {NavBarComponent} from "../nav-bar/nav-bar.component";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {FormsModule, NgForm} from "@angular/forms";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {MatCardAvatar, MatCardModule} from "@angular/material/card";
import {AngularFireModule} from "@angular/fire/compat";
import {environment} from "../../../environments/environment";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";

console.warn("HOME LOADED LAZLY")
@NgModule({
  declarations: [

    HomeComponent,
    NavBarComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatBadgeModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatCardModule



  ]
})
export class HomeModule { }
