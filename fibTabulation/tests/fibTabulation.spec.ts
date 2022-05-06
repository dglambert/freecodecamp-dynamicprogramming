/// <reference types="@types/jest" />

import { fibTabulation } from "../src/fibTabulation";

describe('fibTabulation Test Suite', () => {

    it('fib_0_Returns0', () => {
        expect(fibTabulation(0)).toEqual(0);
    });

    it('fib_1_Returns1', () => {
        expect(fibTabulation(1)).toEqual(1);
    });

    it('fib_2_Returns1', () => {
        expect(fibTabulation(2)).toEqual(1);
    });

    it('fib_3_Returns2', () => {
        expect(fibTabulation(3)).toEqual(2);
    });

    it('fib_4_Returns3', () => {
        expect(fibTabulation(4)).toEqual(3);
    });

    it('fib_5_Returns5', () => {
        expect(fibTabulation(5)).toEqual(5);
    });

    it('fib_6_Returns8', () => {
        expect(fibTabulation(6)).toEqual(8);
    });

    it('fib_50_Returns12586269025', () => {
        expect(fibTabulation(50)).toEqual(12586269025);
    });
});