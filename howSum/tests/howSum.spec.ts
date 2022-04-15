/// <reference types="@types/jest" />
import {howSum} from '../src/howSum';

describe('howSum Test Suite', () => {

    it('howSum_targetIs-1numbersAre1_ReturnsNull', () => {
        expect(howSum(-1, [1])).toEqual(null);
    });

    it('howSum_targetIs0numbersAre1_ReturnsEmptyArray', () => {
        const actualUsedNumbers = howSum(0, [1]);
        if(actualUsedNumbers != null)
        {
            expect(actualUsedNumbers.length).toEqual(0);
        }
    })

    it('howSum_targetIs21numbersAre21_Returns21', () => {
        expect(howSum(21, [21])).toEqual([21]);
    });    
});