/// <reference types="@types/jest" />
import {gridTraveler} from '../src/gridTraveler';

describe('My Test Suite', () => {

    it('gridTraveler_numberOfRowsIs0_Returns-1', () => {
        expect(gridTraveler(0, 1)).toEqual(-1);
      });

    it('gridTraveler_numberOfColumnsIs0_Returns-1', () => {
        expect(gridTraveler(1, 0)).toEqual(-1);
      });
    
});