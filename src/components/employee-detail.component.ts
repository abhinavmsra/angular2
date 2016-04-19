///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import { Component, OnInit } from 'angular2/core';
import { RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { EmployeeEditFormComponent } from './employee-edit-form.component';
import { EmployeeDetailServiceComponent } from '../services/employee-detail-service.component';
import { EmployeeDeleteServiceComponent } from '../services/employee-delete-service.component';

@Component({
  selector: 'employee-detail',
  templateUrl: 'src/pages/employee-detail.component.html',
  providers: [
    EmployeeDetailServiceComponent,
    EmployeeDeleteServiceComponent
  ],
  directives: [ ROUTER_DIRECTIVES, EmployeeEditFormComponent ]
})

export class EmployeeDetailComponent implements OnInit {
  public currentEmployee;
  public errorMessage: string;

  constructor(
    private _router: Router,
    private _routeParams: RouteParams,
    private _detailService: EmployeeDetailServiceComponent,
    private _deleteService: EmployeeDeleteServiceComponent
  ){}

  ngOnInit() {
    let id = parseInt(this._routeParams.get('id'));
    this._detailService.getEmployee(id).subscribe(
                     employee => this.currentEmployee = employee,
                     error =>  this.errorMessage = <any>error
                   );
  }

  deleteHandler(id: number) {
    this._deleteService.deleteEmployee(id).subscribe(
      employee => this.currentEmployee = employee,
      errorMessage => this.errorMessage = errorMessage,
      () => this._router.navigate(['EmployeeList'])
    )
  }
}
