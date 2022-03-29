import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray,FormControl,FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarrarynested',
  templateUrl: './formarrarynested.component.html',
  styleUrls: ['./formarrarynested.component.css']
})
export class FormarrarynestedComponent implements OnInit {
  empForm!: FormGroup;


  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.empForm=this.fb.group({
      employees:this.fb.array([])
    });
  }
 employees(): FormArray{
  return this.empForm.get('employees') as FormArray;
}
newEmployee():FormGroup{

  return this.fb.group({
    firstName: '',
    lastName:'',
    skills:this.fb.array([])
  });
}
addEmployee() {
  this.employees().push(this.newEmployee());
}
removeEmployee(empIndex: number) {
  this.employees().removeAt(empIndex);
}
employeeSkills(empIndex: number): FormArray {
  return this.employees()
    .at(empIndex)
    .get('skills') as FormArray;
}
newSkill(): FormGroup {
  return this.fb.group({
    skill: '',
    exp: ''
  });
}
addEmployeeSkill(empIndex: number) {
  this.employeeSkills(empIndex).push(this.newSkill());
}
removeEmployeeSkill(empIndex: number, skillIndex: number) {
  this.employeeSkills(empIndex).removeAt(skillIndex);
}
onSubmit() {
  console.log(this.empForm.value);
}
}
