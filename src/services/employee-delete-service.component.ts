///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import { Injectable } from 'angular2/core';
import {Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Employee }    from '../models/employee';

@Injectable()
export class EmployeeDeleteServiceComponent {
  public currentEmployee: Employee;
  public errorMessage: string;

  constructor(
    private http: Http
  ) {}

  private _employeesUrl: string = 'http://localhost:3000/employees/';

  deleteEmployee (id: number): Observable<Employee>  {
    this._employeesUrl += id;

    return this.http.delete(this._employeesUrl)
                    .map(res => res.json())
                    .catch(this._handleError);
  }

  private _handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
