// /// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />
//
// import {
//     it,
//     describe,
//     expect,
//     TestComponentBuilder,
//     inject,
//     injectAsync,
//     setBaseTestProviders,
//     beforeEachProviders
// } from "angular2/testing";
// import {
//     Response,
//     XHRBackend,
//     ResponseOptions,
//     HTTP_PROVIDERS
// } from "angular2/http";
// import {
//     MockConnection,
//     MockBackend
// } from "angular2/src/http/backends/mock_backend";
// import {
//     TEST_BROWSER_PLATFORM_PROVIDERS,
//     TEST_BROWSER_APPLICATION_PROVIDERS
// } from "angular2/platform/testing/browser";
// import {
//     Component,
//     provide
// } from "angular2/core";
// import 'rxjs/Rx';
// import { RootRouter } from 'angular2/src/router/router';
// import { Location, RouteParams, Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT } from 'angular2/router';
// import { SpyLocation } from 'angular2/src/mock/location_mock';
//
// import { Employee } from '../models/employee';
// import { EmployeeDetailComponent } from './employee-detail.component';
// import { EmployeeEditFormComponent } from './employee-edit-form.component';
// import { EmployeeDetailServiceComponent } from '../services/employee-detail-service.component';
// import { EmployeeDeleteServiceComponent } from '../services/employee-delete-service.component';
//
// class MockDetailService{
//     public getEmployee (id: number) {
//         return new Employee(1, "Abhinav Mishra");
//     }
// }
//
// class MockDeleteService{
//     public deleteEmployee (id: number) {
//         return new Employee(1, "Abhinav Mishra");
//     }
// }
//
// describe('Employee Detail Component Tests', () => {
//     setBaseTestProviders(
//         TEST_BROWSER_PLATFORM_PROVIDERS,
//         TEST_BROWSER_APPLICATION_PROVIDERS
//     );
//
//     beforeEachProviders(() => {
//         console.log('@@@@@@@@@@@I am here@@@@@@@@@@@@@');
//         return [
//             RouteRegistry,
//             provide(Location, {useClass: SpyLocation}),
//             provide(ROUTER_PRIMARY_COMPONENT, {useValue: EmployeeDetailComponent}),
//             provide(Router, {useClass: RootRouter}),
//             HTTP_PROVIDERS,
//             provide(XHRBackend, {useClass: MockBackend}),
//             provide(RouteParams, { useValue: new RouteParams({ id: '1' }) }),
//             provide(EmployeeDetailServiceComponent, {useClass: MockDetailService}),
//             provide(EmployeeDeleteServiceComponent, {useClass: MockDeleteService})
//         ]
//     });
//
//     it('should render list', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
//         return tcb
//             .overrideProviders(EmployeeDetailComponent,
//                 [
//                     provide(EmployeeDetailServiceComponent, {useClass: MockDetailService}),
//                     provide(EmployeeDeleteServiceComponent, {useClass: MockDeleteService})
//                 ]
//             )
//             .createAsync(EmployeeDetailComponent)
//             .then((componentFixture) => {
//                 componentFixture.detectChanges();
//                 expect(true).toBe(true);
//         });
//     }));
// });
//
