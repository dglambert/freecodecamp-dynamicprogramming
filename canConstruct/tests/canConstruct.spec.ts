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

});
