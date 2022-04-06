import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserInformation } from '../app/models/users';

@Injectable({
  providedIn: 'root',
})
export class HttpParamsService {
  constructor(private http: HttpClient) {}
  public getUsers(): Observable<UserInformation> {
    const url = 'https://reqres.in/api/users';
    let queryParamas = new HttpParams();
    queryParamas = queryParamas.set('page', 2);
    queryParamas=queryParamas.append('total',5);
    queryParamas=queryParamas.append('page',6);
    queryParamas=queryParamas.delete('page',6);
    console.log(queryParamas.toString());
    console.log(queryParamas.getAll('page'));
    console.log(queryParamas.keys());
    let headers=new HttpHeaders();
    headers=headers.set('content-type','application/json');
    headers=headers.append('Access-Control-Allow-Origin', '*');
    console.log(headers);

    return this.http.get<UserInformation>(url, { params: queryParamas } );
  }
}
