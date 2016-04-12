import { Component } from 'angular2/core';
import { NgForm }    from 'angular2/common';
import { Router } from 'angular2/router';

import { Employee }    from '../models/employee';
import { EmployeeFormServiceComponent } from '../services/employee-form-service.component';

@Component({
  selector: 'employee-form',
  templateUrl: 'src/pages/employee-form.component.html',
  providers: [EmployeeFormServiceComponent]
})

export class EmployeeFormComponent {
  constructor(
    private _router: Router,
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
