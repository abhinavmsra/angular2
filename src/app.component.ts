import {Component} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {EmployeeListComponent} from './components/list.component';
import {EmployeeFormComponent} from './components/employee-form.component';
import {EmployeeDetailComponent} from './components/employee-detail.component';
import {EmployeeEditFormComponent} from './components/employee-edit-form.component';

@Component({
    selector: 'my-app',
    templateUrl: 'src/pages/app.component.html',
    styleUrls: ['src/assets/stylesheets/style.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [HTTP_PROVIDERS]
})

@RouteConfig([
    {
        path: '/employee',
        name: 'EmployeeList',
        component: EmployeeListComponent},
    {
        path: '/employee/new',
        name: 'NewEmployee',
        component: EmployeeFormComponent
    },
    {
        path: '/employee/:id',
        name: 'EmployeeDetail',
        component: EmployeeDetailComponent
    },
    {
        path: '/employee/:id/edit',
        name: 'EditEmployee',
        component: EmployeeEditFormComponent
    }
])

export class AppComponent {}
