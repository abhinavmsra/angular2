import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router } from 'angular2/router';

import { Employee } from '../models/employee';
import { EmployeeDetailServiceComponent } from '../services/employee-detail-service.component';
import { EmployeeEditFormServiceComponent } from '../services/employee-edit-form-service.component';

@Component({
  selector: 'employee-edit-form',
  template: `
    <div class="container">
    <h3>Employee Edit Form</h3>
    <form (ngSubmit)="onSubmit()" #employeeForm="ngForm" *ngIf="currentEmployee != undefined">
      <div class="form-group">
        <label for="name">Name</label>
       <input type="text" class="form-control" required [(ngModel)]="currentEmployee.name"
            ngControl="name"  #name="ngForm">
       <div [hidden]="name.valid || name.pristine" class="alert alert-danger">
         Name is required
       </div>
      </div>
      <button type="button" class="btn btn-default" (click)="editEmployee()" [disabled]="!employeeForm.form.valid">Update</button>
    </form>
  </div>
  `,
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
