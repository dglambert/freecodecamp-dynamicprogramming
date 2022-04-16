import {bestSum} from '../src/bestSum';

describe('bestSum Test Suite', () =>{

    it('bestSum_targetIs-1AndnumbersAre1_ReturnsNull', () =>{
        expect(bestSum(-1, [1])).toEqual(null);    
    });

    it('bestSum_targetIs0AndnumbersAre1_ReturnsEmptyArray', () => {
        expect(bestSum(0, [1])).toEqual([]);
    });

});