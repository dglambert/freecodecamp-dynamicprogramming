/// <reference types="@types/jest" />
import {fib, AlgorithmOption} from '../src/fib';

describe('My Test Suite', () => {

  it('fib_6NotMemoized_Returns8', () => {
      expect(fib(6, AlgorithmOption.default)).toEqual(8);
    });

    it('fib_7_Returns13', () => {
      expect(fib(7, AlgorithmOption.Memoized)).toEqual(13);
    });

    it('fib_8_Returns21', () => {
      expect(fib(8, AlgorithmOption.Memoized)).toEqual(21);
    });

    it('fib_9_Returns34', () => {
      expect(fib(9, AlgorithmOption.Memoized)).toEqual(34);
    });

    it('fib_10_Returns55', () => {
      expect(fib(10, AlgorithmOption.Memoized)).toEqual(55);
    });

    it('fib_11_Returns89', () => {
      expect(fib(11, AlgorithmOption.Memoized)).toEqual(89);
    });

    it('fib_12_Returns144', () => {
      expect(fib(12, AlgorithmOption.Memoized)).toEqual(144);
    });

    it('fib_13_Returns233', () => {
      expect(fib(13, AlgorithmOption.Memoized)).toEqual(233);
    });

    it('fib_50_Returns12586269025', () => {
      expect(fib(50, AlgorithmOption.Memoized)).toEqual(12586269025);
    });

  });