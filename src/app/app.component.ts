import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'validations-ang';

  @ViewChild('contactForm')
  contactForm!: NgForm;

  countryList: country[] = [
    new country('1', 'India'),
    new country('2', 'USA'),
    new country('3', 'UK'),
  ];
  contact!: contact;
  ngOnInit(){
    this.contact={
      fname:"Srikanth",
      lname:"B",
      email:"sri524@gmail.com",
      gender:"male",
      isMarried:true,
      country:"2",
      address:{
        city:"Rajahmundry",
        street:"XYZ Street",
        pincode:"533105"
      }
    }

  }
  onSubmit()
  {
console.log(this.contact);
  }

  patchValue()
  {
    let obj={
      fname:"Krishna",
      lname:'S',
      email:"ks@gmail.com"
    };
    this.contactForm.control.patchValue(obj);
    this.contactForm.controls["country"].setValue("1");
  }
  reset()
  {
   // this.contactForm.resetForm();
     this.contactForm.reset();
  }

}
export class country {
  id: string = '';
  name: string = '';
  constructor(ID: string, name: string) {
    this.id = ID;
    this.name = name;
  }
}
export class contact {
  fname: string = '';
  lname: string = '';
  email: string = '';
  gender: string = '';
  isMarried: boolean = true;
  country: string = '';
  address!: {
    city: string;
    street: string;
    pincode: string;
  };
}
