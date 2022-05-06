/// <reference types="@types/jest" />

import { fibTabulation } from "../src/fibTabulation";

describe('fibTabulation Test Suite', () => {

    it('fib_0_Returns0', () => {
        expect(fibTabulation(0)).toEqual(0);
    });

    it('fib_1_Returns1', () => {
        expect(fibTabulation(1)).toEqual(1);
    });
});