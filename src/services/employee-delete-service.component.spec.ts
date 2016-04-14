/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />

import {it, describe, expect, beforeEachProviders, inject, TestComponentBuilder} from "angular2/testing";
import {Response, XHRBackend, ResponseOptions, HTTP_PROVIDERS} from "angular2/http";
import 'rxjs/Rx';

import { EmployeeDeleteServiceComponent } from './employee-delete-service.component';
import {MockConnection, MockBackend} from "angular2/src/http/backends/mock_backend";
import {provide} from "angular2/core";

describe('Employee Delete Service Tests', () => {
    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            EmployeeDeleteServiceComponent
        ]
    });

    it('should delete an employee',
        inject([XHRBackend, EmployeeDeleteServiceComponent], (backend, service) => {
            backend.connections.subscribe(
                (connection:MockConnection) => {
                    var options = new ResponseOptions({
                        body: {
                            "name": "Abhinav Mishra",
                            "id": 1
                        }
                    });

                    var response = new Response(options);

                    connection.mockRespond(response);
                }
            );

            service.deleteEmployee(1).subscribe(
                (employee) => {
                    expect(employee.name).toBe('Abhinav Mishra');
                }
            );

            service.deleteEmployee(1).subscribe(
                (employee) => {
                    expect(employee.id).toBe(1);
                }
            );
        })
    );
});

