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

    it('bestSum_targetSumIs7AndnumbersAre1_7_Returns7', () => {
        expect(bestSum(7, [1,7])).toEqual([7]);
    });

});