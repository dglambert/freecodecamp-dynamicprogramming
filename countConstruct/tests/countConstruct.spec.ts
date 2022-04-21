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
   
    it('countConstruct_targetIsfooAndwordsAref_oo_fo_o_Returns3', () => {
        expect(countConstruct('foo', ['f', 'oo', 'fo', 'o'])).toEqual(3);
    });

    it('canConstruct_targetIseeeeeeeeeeeeeeeeeeeeeeeeeeeeefAndwordsAreee_eee_eeee_eeeee_eeeeee_Returns0', () => {
        const target = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeef';
        const wordBank = ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'];
        expect(countConstruct(target, wordBank)).toEqual(0);
    });

});