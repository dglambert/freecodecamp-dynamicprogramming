/// <reference types="@types/jest" />
import {howSum} from '../src/howSum';

describe('howSum Test Suite', () => {

    it('howSum_targetIs-1numbersAre1_ReturnsNull', () => {
        expect(howSum(-1, [1])).toEqual(null);
    });
    
});