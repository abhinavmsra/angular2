import { Component, Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Employee }    from '../models/employee';

@Injectable()
export class EmployeeListServiceComponent {
  constructor(private http: Http) { }

  private _employeesUrl: string = 'http://localhost:3000/employees';

  getUrl() {
    return this._employeesUrl;
  }

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
