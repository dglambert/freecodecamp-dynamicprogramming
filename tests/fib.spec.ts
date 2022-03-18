import fib from '../src/fib';

describe('My Test Suite', () => {
    it('fib_6_Returns8', () => {
      expect(fib(6)).toEqual(8);
    });
    it('fib_7_Returns13', () => {
      expect(fib(7)).toEqual(13);
    });
    it('fib_8_Returns21', () => {
      expect(fib(8)).toEqual(21);
    });
    it('fib_50_Returns12586269025', () => {
      expect(fib(50)).toEqual(12586269025);
    });
});