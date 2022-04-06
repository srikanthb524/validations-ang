import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetuserService } from '../getuser.service';
//import { Users } from '../models/users';
import { posts } from '../models/posts';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-http-get-example',
  templateUrl: './http-get-example.component.html',
  styleUrls: ['./http-get-example.component.css'],
})
export class HttpGetExampleComponent implements OnInit {
  baseURL: string = 'https://jsonplaceholder.typicode.com/';
  users:any;
  posts: posts[] = [];
  p: number = 1;

  constructor(
    private http: HttpClient,
    private gs: GetuserService,
    private spinner: NgxSpinnerService
  ) {}

  // getUsers(){
  //   this.http.get(this.baseURL+'users/')
  //   .subscribe((data)=>{
  //   console.log('response received',data);
  //   },
  //   (error)=>{
  //     console.log('Request Failed');
  //     console.log(error);
  //   },
  //   ()=>{
  //     console.log('Request Completed');
  //   });
  // }
  ngOnInit(): void {
    //this.getUsers();
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 5000);


    this.gs.getUsersFromService().subscribe((data) => {
      this.users = data;
      console.log(data.address);
      // console.log('Response from Service',this.users[0].address);
    });

    this.gs.getPostFromService().subscribe(
      (data) => {
        this.posts = data;
        console.log('Post Service', this.posts);
      },
      (error) => {
        console.log('Error', error);
      }
    );

  }
}
