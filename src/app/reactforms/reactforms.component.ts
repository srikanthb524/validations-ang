import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validator,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactforms',
  templateUrl: './reactforms.component.html',
  styleUrls: ['./reactforms.component.css']
})
export class ReactformsComponent implements OnInit {
  contactForm=new FormGroup({ });

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

  }
onSubmit()
{
  console.log(this.contactForm.value);
}
}
