import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { gte } from '../gte.validator';

@Component({
  selector: 'app-cust-valid-react',
  templateUrl: './cust-valid-react.component.html',
  styleUrls: ['./cust-valid-react.component.css']
})
export class CustValidReactComponent implements OnInit {

  myForm:any;

  constructor() {
    this.myForm=new FormGroup({
      numVal:new FormControl('',[gte]),
    })
  }

  ngOnInit(): void {
  }
  get numVal() {
    return this.myForm.get('numVal');
  }

  onSubmit() {
    console.log(this.myForm.value);
  }

}
