/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />

import {
    it,
    describe,
    expect,
    TestComponentBuilder,
    injectAsync,
    setBaseTestProviders,
    beforeEachProviders
} from "angular2/testing";
import { provide } from "angular2/core";
import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from "angular2/platform/testing/browser";
import {
    HTTP_PROVIDERS,
    XHRBackend,
    ResponseOptions,
    Response
} from "angular2/http";
import {
    MockBackend,
    MockConnection
} from "angular2/src/http/backends/mock_backend";
import { ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/Rx';

import { EmployeeListComponent } from './list.component';
import { EmployeeListServiceComponent } from '../services/employee-list-service.component';


describe('MyList Tests', () => {
    setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

    beforeEachProviders(() => {
        return [
            HTTP_PROVIDERS,
            provide(XHRBackend, {useClass: MockBackend}),
            EmployeeListServiceComponent
        ]
    });

    it('Should create a component MyList',
        injectAsync([XHRBackend, EmployeeListServiceComponent, TestComponentBuilder], (backend, service, tcb) => {
            backend.connections.subscribe(
                (connection:MockConnection) => {
                    var options = new ResponseOptions({
                        body: [
                            {
                                "name": "Abhinav Mishra",
                                "id": 1
                            },
                            {
                                "name": "Abhinav Mishra",
                                "id": 2
                            }
                        ]
                    });

                    var response = new Response(options);

                    connection.mockRespond(response);
                }
            );

            return tcb
                .overrideProviders(EmployeeListComponent,
                                [
                                    ROUTER_PROVIDERS,
                                    EmployeeListServiceComponent
                                ]
                            )
                .createAsync(EmployeeListComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(true).toBe(true);
                });
        })
    );
});
