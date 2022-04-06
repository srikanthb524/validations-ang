import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpParamsService } from '../http-params.service';
import { UserInformation } from '../models/users';

@Component({
  selector: 'app-http-params-example',
  templateUrl: './http-params-example.component.html',
  styleUrls: ['./http-params-example.component.css'],
})
export class HttpParamsExampleComponent implements OnInit {
  userInfo: UserInformation[] = [];

  constructor(private http: HttpClient, private httpparam: HttpParamsService) {}

  ngOnInit(): void {
    this.httpparam.getUsers().subscribe((data) => {
      console.log(data);
    });
  }
}
