/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />

import {it, describe, expect, beforeEachProviders, inject} from "angular2/testing";
import {Response, XHRBackend, ResponseOptions, HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx';

import { EmployeeListServiceComponent } from './employee-list-service.component';
import {MockConnection, MockBackend} from "angular2/src/http/backends/mock_backend";
import {provide} from "angular2/core";

describe('Employee List Service Tests', () => {
    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            EmployeeListServiceComponent
        ]
    });

    it('should return a list of employees',
        inject([XHRBackend, EmployeeListServiceComponent], (backend, service) => {
            backend.connections.subscribe(
                (connection:MockConnection) => {
                    var options = new ResponseOptions({
                        body: [
                            {
                                "name": "Abhinav Mishra",
                                "id": 1
                            }
                        ]
                    });

                    var response = new Response(options);

                    connection.mockRespond(response);
                }
            );

            service.getEmployees().subscribe(
                (employees) => {
                    expect(employees[0].name).toBe('Abhinav Mishra');
                }
            );

            service.getEmployees().subscribe(
                (employees) => {
                    expect(employees[0].id).toBe(1);
                }
            );
        })
    );
});

