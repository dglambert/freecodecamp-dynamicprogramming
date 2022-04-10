import {canSum} from '../src/canSum';

describe('canSum Test Suite', () => {

    it('canSum_targetIs21numbersAre21_ReturnsTrue', () => {
        expect(canSum(21, [21])).toEqual(true);
      });

    it('canSum_targetIs9numbersAre1_ReturnsTrue', () => {
        expect(canSum(9, [1])).toEqual(true);
      });
      
    
});