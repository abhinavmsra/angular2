///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import { Injectable } from 'angular2/core';
import {Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Employee }    from '../models/employee';

@Injectable()
export class EmployeeListServiceComponent {
  constructor(private http: Http) { }

  private _employeesUrl: string = 'http://localhost:3000/employees';

  getEmployees () {
    return this.http.get(this._employeesUrl)
                    .map(res => <Employee[]> res.json())
                    .catch(this._handleError);
  }

  private _handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
