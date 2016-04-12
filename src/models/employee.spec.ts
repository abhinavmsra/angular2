/// <reference path="../../typings/main/ambient/jasmine/jasmine.d.ts" />

import {it, describe, expect} from "angular2/testing";

import { Employee } from './employee';

describe('Tests for Employee Model', () => {
    let employee;

    beforeEach(function() {
        employee = new Employee(1, 'Abhinav Mishra');
    });

    it('should have name as assigned',() => {
        expect(employee.name).toEqual('Abhinav Mishra');
    });

    it('should have id as assigned',() => {
        expect(employee.id).toEqual(1);
    });
});