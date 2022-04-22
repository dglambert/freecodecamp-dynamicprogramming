import {allConstruct} from '../src/allConstruct';

describe('allConstruct Test Suite', () => {

    it('allConstruct_targetIsEmptyString_ReturnsEmpty2DArray', () => {
        expect(allConstruct("", [])).toEqual([[]]);
    });

    it('allConstruct_targetIsfooAndwordsArefoo_Returnsfoo', () => {
        expect(allConstruct('foo', ['foo'])).toEqual([['foo']]);
    });

    it('allConstruct_targetIsfooAndwordsArefoo_Returnsfoo', () => {
        expect(allConstruct('foo', [])).toEqual(null);
    });

});