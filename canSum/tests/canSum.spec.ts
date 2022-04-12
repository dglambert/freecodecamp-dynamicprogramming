import {canSum} from '../src/canSum';

describe('canSum Test Suite', () => {

    it('canSum_targetIs21numbersAre21_ReturnsTrue', () => {
        expect(canSum(21, [21])).toEqual(true);
      });

    it('canSum_targetIs9numbersAre1_ReturnsTrue', () => {
        expect(canSum(9, [1])).toEqual(true);
      });

    it('canSum_targetIs9numbersAre8_9_ReturnsTrue', () => {
        expect(canSum(9, [8, 9])).toEqual(true);
      });

    it('canSum_targetIs7numbersAre4_3_ReturnsTrue', () => {
        expect(canSum(7, [4, 3])).toEqual(true);
      });

    it('canSum_targetIs7numbersAre5_3_ReturnsFalse', () => {
        expect(canSum(7, [5, 3])).toEqual(false);
      });
    
    it('canSum_targetIs13numbersAre2_4_7_ReturnsTrue', () => {
        expect(canSum(13, [2, 4, 7])).toEqual(true);
      });

    it('canSum_targetIs9numbersAre2_4_5_ReturnsTrue', () => {
        expect(canSum(9, [2, 4, 5])).toEqual(true);
      });

    it('canSum_targetIs7numbersAre2_3_ReturnsTrue', () => {
        expect(canSum(7, [2, 3])).toEqual(true);
      });

    it('canSum_targetIs300numbersAre7_14_ReturnsFalse', () => {
        expect(canSum(300, [7, 14])).toEqual(false);
      });

});