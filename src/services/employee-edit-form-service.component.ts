import { Component, Injectable } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import {Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Employee }    from '../models/employee';

@Component({
  directives: [ROUTER_DIRECTIVES]
})

@Injectable()
export class EmployeeEditFormServiceComponent {
  constructor(private http: Http) { }

  private _employeesUrl: string = 'http://localhost:3000/employees/';

  editEmployee (employee: Employee) : Observable<Employee>  {
    this._employeesUrl += employee.id;

    let body = JSON.stringify({ name: employee.name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.patch(this._employeesUrl, body, options)
                    .map(res =>  <Employee> res.json())
                    .catch(this._handleError)
  }

  private _handleError (error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
