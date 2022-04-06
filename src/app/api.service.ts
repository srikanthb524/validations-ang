import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from './models/person';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL: string="http://localhost:3000/"
  constructor(private http:HttpClient) {
  }

  getPeople():Observable<Person[]>
  {
    console.log('getPople'+this.baseURL+'people');
    return this.http.get<Person[]>(this.baseURL+'people');
  }
  addPerson(person:Person):Observable<any>{
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(person);
    return this.http.post(this.baseURL+'people',body,{'headers':headers})
    }
}
