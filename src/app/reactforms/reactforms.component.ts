import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-reactforms',
  templateUrl: './reactforms.component.html',
  styleUrls: ['./reactforms.component.css'],
})
export class ReactformsComponent implements OnInit {

 skillsForm!:FormGroup;

  constructor(private fb: FormBuilder) {
    this.skillsForm=this.fb.group({
      name:"",
      skills:this.fb.array([])
    });
  }
  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
 }

  //adding Skills Dynamically

  addSkills() {
    this.skills.push(this.newSkill());
 }

  //Remove SAkills Dynamically

  removeSkill(i:number) {
    this.skills.removeAt(i);
  }
  onSubmit() {
    console.log(this.skillsForm.value);
  }


  ngOnInit(): void {}

}
