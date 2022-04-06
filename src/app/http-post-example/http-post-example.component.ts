import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-http-post-example',
  templateUrl: './http-post-example.component.html',
  styleUrls: ['./http-post-example.component.css']
})
export class HttpPostExampleComponent implements OnInit {
  person = new Person();
  people:Person[]=[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getPerson();
  }
  addPerson()
  {
    this.api.addPerson(this.person)
    .subscribe(data=>{
      console.log(data);
    })
    this.getPerson();
  }

  getPerson()
  {
    this.api.getPeople()
    .subscribe(data=>{
      console.log(data)
      this.people=data;
    })
  }

}
