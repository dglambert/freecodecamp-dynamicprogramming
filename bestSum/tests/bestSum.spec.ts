import {bestSum} from '../src/bestSum';

describe('bestSum Test Suite', () =>{

    it('bestSum_targetIs-1AndnumbersAre1_ReturnsNull', () =>{
        expect(bestSum(-1, [])).toEqual(null);    
    });
});