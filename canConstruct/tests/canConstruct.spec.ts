/// <reference types="@types/jest" />

import {canConstruct} from '../src/canConstruct';

describe('canConstruct Test Suite', () => {

    it('canConstruct_targetIsEmptyString_ReturnsTrue', () => {
        expect(canConstruct('', [])).toEqual(true);
    });

    it('canConstruct_targetIsFooAndwordsAreFoo_ReturnsTrue', () => {
        expect(canConstruct('foo', ['foo'])).toEqual(true);
    });

    it('canConstruct_targetIsFooFooAndwordsAreFoo_ReturnsTrue', () => {
        expect(canConstruct('FooFoo', ['Foo'])).toEqual(true);
    });

    it('canConstruct_targetIsFooBarAndwordsAreFoo_ReturnsFalse', () => {
        expect(canConstruct('FooBar', ['Foo'])).toEqual(false);
    });

    it('canConstruct_targetIsFooBarAndwordsAreFoo_Bar_ReturnsTrue', () => {
        expect(canConstruct('FooBar', ['Foo', 'Bar'])).toEqual(true);
    });

    it('canConstruct_targetIsskateboardAndwordsArekate_sboard_ReturnsFalse', () => {
        expect(canConstruct('skateboard', ['kate', 'sboard'])).toEqual(false);
    });

    it('canConstruct_targetIsabcdefAndwordsAreab_abc_cd_def_abcd_ReturnsTrue', () => {
        expect(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])).toEqual(true);
    });

    it('canConstruct_targetIseeeeeeeeeeeeeeeeeeeeeeeeeeeeefAndwordsAreee_eee_eeee_eeeee_eeeeee_ReturnsFalse', () => {
        const target = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeef';
        const wordBank = ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'];
        expect(canConstruct(target, wordBank)).toEqual(false);
    });

});
