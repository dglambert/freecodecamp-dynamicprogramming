/// <reference types="@types/jest" />

import {countConstruct} from '../src/countConstruct';

describe('countConstruct Test Suite', () => {

    it('countConstruct_targetIsEmptyString_Returns1', () => {
        expect(countConstruct('', [])).toEqual(1);
    });
    

});