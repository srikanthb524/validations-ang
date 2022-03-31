import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { country } from '../app.component';

@Component({
  selector: 'app-valid-react',
  templateUrl: './valid-react.component.html',
  styleUrls: ['./valid-react.component.css'],
})
export class ValidReactComponent implements OnInit {

  contactForm:any;
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

  constructor() {
   this.contactForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z]+$'),
      ]),
      email: new FormControl('', [Validators.email, Validators.required]),
      gender: new FormControl('', [Validators.required]),
      isMarried: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      address: new FormGroup({
        city: new FormControl('', [Validators.required]),
        street: new FormControl('', [Validators.required]),
        pincode: new FormControl('', [Validators.required]),
      }),
    });
  }

  ngOnInit(): void {}

  onSubmit()
{
console.log(this.contactForm);
}
get firstname() {
  return this.contactForm.get('firstname');
}
get lastname() {
  return this.contactForm.get('lastname');
}
}


