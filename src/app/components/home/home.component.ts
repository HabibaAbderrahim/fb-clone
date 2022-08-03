import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserData} from "../../models/model";

import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {PostService} from "../../services/post.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit , OnDestroy {

  posts:any ;
  user: UserData | undefined ;
  postsub: Subscription []=[];


  constructor(
   private activateRoute:ActivatedRoute,
   private postService:PostService
  ) { }

  ngOnInit(): void {

    this.postsub.push(
    this.postService.getAllPosts().subscribe((posts: any) =>{
      this.posts=posts
    }));


  }

  postMessage(form:NgForm):void{
    //input message
    const {message} = form.value ;
    this.postService.postMessage(message);
    form.resetForm();

  }

  ngOnDestroy(): void {

  }

}
