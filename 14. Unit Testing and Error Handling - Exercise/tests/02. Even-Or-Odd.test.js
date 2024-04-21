import { assert } from 'chai';
import { isOddOrEven } from '../02. Even Or Odd/Even-Or-Odd.js';

describe("tests isOddOrEven", () => {
    it("tests with invalid param", () => {
        assert.isUndefined(isOddOrEven([]), "should return undefined");
        assert.isUndefined(isOddOrEven({}), "should return undefined");
        assert.isUndefined(isOddOrEven(10), "should return undefined");
        assert.isUndefined(isOddOrEven(), "should return undefined");
    });

    it("tests with valid param", () => {
        assert.equal(isOddOrEven("even string "), "even", "fail with single even string");
        assert.equal(isOddOrEven(""), "even", "fail with empty string");
        assert.equal(isOddOrEven("odd string "), "odd", "fail with single odd string");
        assert.equal(isOddOrEven("1", "11"), "odd", "fail with multiple arguments");
    });
})