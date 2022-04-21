/// <reference types="@types/jest" />

import {countConstruct} from '../src/countConstruct';

describe('countConstruct Test Suite', () => {

    it('countConstruct_targetIsEmptyString_Returns1', () => {
        expect(countConstruct('', [])).toEqual(1);
    });

    it('countConstruct_targetIsfooAndwordsAreEmpty_Returns0', () => {
        expect(countConstruct('foo', [])).toEqual(0);
    });
    

});