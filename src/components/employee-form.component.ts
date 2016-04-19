import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';
import { Router } from 'angular2/router';

import { Employee }    from '../models/employee';
import { EmployeeFormServiceComponent } from '../services/employee-form-service.component';

@Component({
  selector: 'employee-form',
  template: `
    <div class="container">
    <h3>Employee Form</h3>
    <form (ngSubmit)="onSubmit()" #employeeForm="ngForm">
      <div class="form-group">
        <label for="name">Name</label>
       <input type="text" class="form-control" required
            (keyup)="onKey($event)"
            ngControl="name"  #name="ngForm" >
       <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
         Name is required
       </div>
      </div>
      <button type="button" class="btn btn-default" (click)="newEmployee()" [disabled]="!employeeForm.form.valid">ADD</button>
    </form>
  </div>
  `,
  providers: [EmployeeFormServiceComponent]
})

export class EmployeeFormComponent {
  constructor(
    private _employeeService: EmployeeFormServiceComponent
  ){}

  public model: Employee = {name: '', id: 1 };
  public errorMessage: string;

  newEmployee() {
    this._employeeService.addEmployee(this.model.name)
      .subscribe(
        employee => this.model = employee,
        error =>  this.errorMessage = <any>error
      );
    window.history.back();
  }

  onKey(event: any) {
    this.model.name = event.target.value;
  }
}
