import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { Employee } from '../models/employee';
import { EmployeeDetailServiceComponent } from '../services/employee-detail-service.component';
import { EmployeeEditFormServiceComponent } from '../services/employee-edit-form-service.component';

@Component({
  selector: 'employee-edit-form',
  templateUrl: 'src/pages/employee-edit-form.component.html',
  providers: [
    EmployeeDetailServiceComponent,
    EmployeeEditFormServiceComponent
  ]
})

export class EmployeeEditFormComponent implements OnInit {
  public currentEmployee: Employee;
  public errorMessage: string;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _detailService: EmployeeDetailServiceComponent,
    private _editService: EmployeeEditFormServiceComponent
  ){}

  ngOnInit() {
    let id = parseInt(this._routeParams.get('id'));
    this._detailService.getEmployee(id).subscribe(
                     employee => this.currentEmployee = employee
                   );
  }

  editEmployee() {
    this._editService.editEmployee(this.currentEmployee)
    .subscribe(
      employee => this.currentEmployee = employee,
      error =>  this.errorMessage = <any>error,
      () => this._router.navigate(['EmployeeDetail', {id: this.currentEmployee.id}])
    );
  }
}
