/// <reference types="@types/jest" />
import {bestSum} from '../src/bestSum';

describe('bestSum Test Suite', () =>{

    it('bestSum_targetIs-1AndnumbersAre1_ReturnsNull', () =>{
        expect(bestSum(-1, [1])).toEqual(null);    
    });

    it('bestSum_targetIs0AndnumbersAre1_ReturnsEmptyArray', () => {
        expect(bestSum(0, [1])).toEqual([]);
    });

    it('bestSum_targetIs7AndnumbersAre7_Returns7', () => {
        expect(bestSum(7, [7])).toEqual([7]);
    });

    it('bestSum_targetIs3AndnumbersAre1_Returns1_1_1', () => {
        expect(bestSum(3, [1])).toEqual([1,1,1]);
    });

    it('bestSum_targetIs7AndnumbersAre7_1_Returns7', () => {
        expect(bestSum(7, [7,1])).toEqual([7]);
    });

    it('bestSum_targetIs7AndnumbersAre1_7_Returns7', () => {
        expect(bestSum(7, [1,7])).toEqual([7]);
    });

    it('bestSum_targetIs7AndnumbersAre5_3_4_7_Returns7', () => {
        expect(bestSum(7, [5,3,4,7])).toEqual([7]);
    });

    it('bestSum_targetIs8AndnumbersAre2_3_5_Returns3_5', () => {
        expect(bestSum(8, [2,3,5])).toEqual([3,5]);
    });

    it('bestSum_targetIs8AndnumbersAre1_4_5_Returns4_4', () => {
        expect(bestSum(8, [1,4,5])).toEqual([4,4]);
    });

    it('bestSum_targetIs100AndnumbersAre1_2_5_25_Returns25_25_25_25', () => {
        expect(bestSum(100, [1,2,5,25])).toEqual([25,25,25,25]);
    });

});