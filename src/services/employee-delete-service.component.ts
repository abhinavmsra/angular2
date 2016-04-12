import { Component, Injectable } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';
import {Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Employee }    from '../models/employee';

@Component({
  directives: [ROUTER_DIRECTIVES]
})

@Injectable()
export class EmployeeDeleteServiceComponent {
  public currentEmployee: Employee;
  public errorMessage: string;

  constructor(
    private http: Http,
    private _router: Router
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
