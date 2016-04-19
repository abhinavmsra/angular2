/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />

import {
    it,
    describe,
    expect,
    beforeEachProviders,
    inject
} from "angular2/testing";
import {
    Response,
    XHRBackend,
    ResponseOptions,
    HTTP_PROVIDERS
} from "angular2/http";
import {MockConnection, MockBackend} from "angular2/src/http/backends/mock_backend";
import {provide} from "angular2/core";
import 'rxjs/Rx';

import { EmployeeDetailServiceComponent } from './employee-detail-service.component';

describe('Employee Detail Service Tests', () => {
    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            EmployeeDetailServiceComponent
        ]
    });

    it('should return details of employee',
        inject([XHRBackend, EmployeeDetailServiceComponent], (backend, service) => {
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

            service.getEmployee(1).subscribe(
                (employee) => {
                    expect(employee.name).toBe('Abhinav Mishra');
                }
            );

            service.getEmployee(1).subscribe(
                (employee) => {
                    expect(employee.id).toBe(1);
                }
            );
        })
    );
});

