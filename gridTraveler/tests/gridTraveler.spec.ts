/// <reference types="@types/jest" />
import {gridTraveler} from '../src/gridTraveler';

describe('My Test Suite', () => {

    it('gridTraveler_numberOfRowsIs0_Returns-1', () => {
        expect(gridTraveler(0, 1)).toEqual(-1);
      });

    it('gridTraveler_numberOfColumnsIs0_Returns-1', () => {
        expect(gridTraveler(1, 0)).toEqual(-1);
      });
    
    it('gridTraveler_numberOfRowsIs1ANDnumberOfColumnsIs1_Returns1', () => {
        expect(gridTraveler(1, 1)).toEqual(1);
      });
    
    it('gridTraveler_numberOfRowsIs1ANDnumberOfColumnsIs2_Returns1', () => {
        expect(gridTraveler(1, 2)).toEqual(1);
      });

    it('gridTraveler_numberOfRowsIs2ANDnumberOfColumnsIs1_Returns1', () => {
        expect(gridTraveler(2, 1)).toEqual(1);
      });

    it('gridTraveler_numberOfRowsIs1ANDnumberOfColumnsIs3_Returns1', () => {
        expect(gridTraveler(1, 3)).toEqual(1);
      }); 
    
    it('gridTraveler_numberOfRowsIs3ANDnumberOfColumnsIs1_Returns1', () => {
        expect(gridTraveler(3, 1)).toEqual(1);
      });

    it('gridTraveler_numberOfRowsIs2ANDnumberOfColumnsIs2_Returns2', () => {
        expect(gridTraveler(2, 2)).toEqual(2);
      });
      
    it('gridTraveler_numberOfRowsIs2ANDnumberOfColumnsIs3_Returns3', () => {
        expect(gridTraveler(2, 3)).toEqual(3);
      });
    
    it('gridTraveler_numberOfRowsIs3ANDnumberOfColumnsIs2_Returns3', () => {
        expect(gridTraveler(3, 2)).toEqual(3);
      });



});