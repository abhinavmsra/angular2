///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { Employee } from '../models/employee';
import { EmployeeListServiceComponent } from '../services/employee-list-service.component';

@Component({
  selector: 'employee-list',
  template: `
    <ul class="employees">
  <li *ngFor="#employee of employees">
    <a [routerLink]="['EmployeeDetail', {id: employee.id}]">
      <span class="badge">{{employee.id}}</span>
      {{employee.name}}
    </a>
  </li>
</ul>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [EmployeeListServiceComponent]
})

export class EmployeeListComponent implements OnInit {
  public employees: Employee[];
  public errorMessage: string;

  constructor(
    private _listingService: EmployeeListServiceComponent
  ){}

  ngOnInit() {
    this._listingService.getEmployees().subscribe(
                     employees => this.employees = employees,
                     error =>  this.errorMessage = <any>error
                   );
  }
}
