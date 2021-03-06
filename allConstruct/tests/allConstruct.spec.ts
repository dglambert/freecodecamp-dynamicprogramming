import {allConstruct} from '../src/allConstruct';

describe('allConstruct Test Suite', () => {

    it('allConstruct_targetIsEmptyString_ReturnsEmpty2DArray', () => {
        expect(allConstruct("", [])).toEqual([[]]);
    });

    it('allConstruct_targetIsfooAndwordsArefoo_Returnsfoo', () => {
        expect(allConstruct('foo', ['foo'])).toEqual([['foo']]);
    });

    it('allConstruct_targetIsfooAndwordsAreEmpty_ReturnsEmptyArray', () => {
        expect(allConstruct('foo', [])).toEqual([]);
    });

    it('allConstruct_targetIsfooAndwordsAref_oo_Returnsf_oo', () => {
        expect(allConstruct('foo', ['f', 'oo'])).toEqual([['f', 'oo']]);
    });

    it('allConstruct_targetIsfooAndwordsArefo_o_Returnsfo_o', () => {
        expect(allConstruct('foo', ['fo', 'o'])).toEqual([['fo', 'o']]);
    });

    it('allConstruct_targetIsfooAndwordsArefo_o_f_Returnsfo_o__f_o_o', () => {
        expect(allConstruct('foo', ['fo', 'o', 'f'])).toEqual([['fo', 'o'], ['f', 'o', 'o']]);
    });

    it('allConstruct_targetIsabcdefAndwordsAreab_abc_cd_def_abcd_ef_c_Returns_ab_cd_ef__ab_c_def__abc_def__abcd_ef', () => {
        const target = 'abcdef';
        const wordBank = ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'];
        const expected = [
                ['ab', 'cd', 'ef']
                , ['ab', 'c', 'def']
                , ['abc', 'def']
                , ['abcd', 'ef']
            ];
        expect(allConstruct(target, wordBank)).toEqual(expected);
    });

    it('allConstruct_targetIspurpleAndwordsArepurp_p_ur_le_purpl_Returns_purp_le__p_ur_p_le', () => {
        const target = 'purple';
        const wordBank = ['purp', 'p', 'ur', 'le', 'purpl'];
        const expected = [
                ['purp', 'le']
                , ['p', 'ur', 'p', 'le']
            ];
        expect(allConstruct(target, wordBank)).toEqual(expected);
    });

    it('allConstruct_targetIseeeeeeeeeeeeeeeeeeeeeeeeeeeeefAndwordsAreee_eee_eeee_eeeee_eeeeee_ReturnsEmptyArray', () => {
        const target = 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeef';
        const wordBank = ['e', 'ee', 'eee', 'eeee', 'eeeee', 'eeeeee'];
        expect(allConstruct(target, wordBank)).toEqual([]);
    });

});