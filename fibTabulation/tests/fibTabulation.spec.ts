/// <reference types="@types/jest" />

import { fibTabulation } from "../src/fibTabulation";

describe('fibTabulation Test Suite', () => {

    it('fib_0_Returns0', () => {
        expect(fibTabulation(0)).toEqual(0);
    });
});