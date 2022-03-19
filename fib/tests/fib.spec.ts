/// <reference types="@types/jest" />
import {fib, AlgorithmOption} from '../src/fib';

describe('My Test Suite', () => {

  it('fib_6NotMemoized_Returns8', () => {
      expect(fib(6, AlgorithmOption.default)).toEqual(8);
    });

    it('fib_50_Returns12586269025', () => {
      expect(fib(50, AlgorithmOption.Memoized)).toEqual(12586269025);
    });

  });