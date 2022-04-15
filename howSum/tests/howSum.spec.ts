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

    it('howSum_targetIs3numbersAre1_Returns1_1_1', () => {
        expect(howSum(3, [1])).toEqual([1,1,1]);
    });

    it('howSum_targetIs21numbersAre20_1_Returns1,20', () => {
        expect(howSum(21, [20,1])).toEqual([1, 20]);
    });

    it('howSum_targetIs5numbersAre2_3_7_Returns3_2', () => {
        expect(howSum(5, [2,3,7])).toEqual([3,2]);
    });

    it('howSum_targetIs7numbersAre2_4_ReturnsNull', () => {
        expect(howSum(7, [2,4])).toEqual(null);
    });

    it('howSum_targetIs10000numbersAre1_ReturnsArrayLength10000,', () => {
        const actualUsedNumbers = howSum(10000, [1]);
        if(actualUsedNumbers != null)
        {
            expect(actualUsedNumbers.length).toEqual(10000);
        }
    });

});