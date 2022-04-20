/// <reference types="@types/jest" />

import {countConstruct} from '../src/countConstruct';

describe('countConstruct Test Suite', () => {

    it('countConstruct_targetIsEmptyString_Returns0', () => {
        expect(countConstruct('', [])).toEqual(0);
    });

});