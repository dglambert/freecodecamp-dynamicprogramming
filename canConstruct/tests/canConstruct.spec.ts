/// <reference types="@types/jest" />

import {canConstruct} from '../src/canConstruct';

describe('canConstruct Test Suite', () => {

    it('canConstruct_targetIsFooAndwordsAreFoo_ReturnsTrue', () => {
        expect(canConstruct('foo', ['foo'])).toEqual(true);
    });

});
