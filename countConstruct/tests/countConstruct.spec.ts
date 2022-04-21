/// <reference types="@types/jest" />

import {countConstruct} from '../src/countConstruct';

describe('countConstruct Test Suite', () => {

    it('countConstruct_targetIsEmptyString_Returns1', () => {
        expect(countConstruct('', [])).toEqual(1);
    });

    it('countConstruct_targetIsfooAndwordsAreEmpty_Returns0', () => {
        expect(countConstruct('foo', [])).toEqual(0);
    });

    it('countConstruct_targetIsfooAndwordsArefoo_Returns1', () => {
        expect(countConstruct('foo', ['foo'])).toEqual(1);
    });

    it('countConstruct_targetIsfooAndwordsAref_oo_Returns1', () => {
        expect(countConstruct('foo', ['f', 'oo'])).toEqual(1);
    });
    

});