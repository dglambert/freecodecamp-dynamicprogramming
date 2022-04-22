import {allConstruct} from '../src/allConstruct';

describe('allConstruct Test Suite', () => {

    it('allConstruct_targetIsEmptyString_ReturnsEmpty2DArray', () => {
        expect(allConstruct("", [])).toEqual([[]]);
    });

});