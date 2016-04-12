import { Component, Injectable } from 'angular2/core';
import {Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { Employee }    from '../models/employee';

@Injectable()
export class EmployeeFormServiceComponent {
  constructor(private http: Http) { }

  private _employeesUrl: string = 'http://localhost:3000/employees';

  addEmployee (name: string) : Observable<Employee>  {

    let body = JSON.stringify({ name: name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this._employeesUrl, body, options)
                    .map(res =>  <Employee> res.json())
                    .catch(this._handleError)
  }

  private _handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
