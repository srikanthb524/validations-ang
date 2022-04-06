import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class GetuserService {
  baseURL:string='https://jsonplaceholder.typicode.com/';
  constructor(private http:HttpClient) { }

  getUsersFromService():Observable<any>{
    return this.http.get(this.baseURL+'users/');
  }
  getPostFromService():Observable<any>
  {
    return this.http.get(this.baseURL+'posts/');
  }
}
