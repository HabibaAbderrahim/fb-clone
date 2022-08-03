import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {RegisterComponent} from "../register/register.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
   disabled:boolean;
  constructor(
    private router:Router,
    private matDialog: MatDialog,
               ) {

  }

  ngOnInit(): void {
  }

  login(f:NgForm):void{
    if (f.invalid) {
      this.disabled=true

    }


  }
  takeMeToRegister():void{
    //this.router.navigate(['register']);
    const dialog = this.matDialog.open(RegisterComponent, {
      role: 'dialog',
      height: '480px',
      width: '480px'

  });}
}
