/// <reference types="@types/jest" />
import {gridTraveler} from '../src/gridTraveler';

describe('My Test Suite', () => {

    it('gridTraveler_numberOfRowsIs0_Returns-1', () => {
        expect(gridTraveler(0, 0)).toEqual(-1);
      });
    
});