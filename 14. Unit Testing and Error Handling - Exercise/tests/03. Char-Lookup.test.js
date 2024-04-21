import { expect } from 'chai';
import { lookupChar } from '../03. Char Lookup/Char-Lookup.js';

describe("tests for missing params or invalid types", () => {
    it("tests for missing params", () => {
        expect(lookupChar()).to.equal(undefined, "with two missing params");
        expect(lookupChar([])).to.equal(undefined, "with one missing params");
        expect(lookupChar({})).to.equal(undefined, "with one missing params");
        expect(lookupChar("")).to.equal(undefined, "with one missing params");
        expect(lookupChar(" ")).to.equal(undefined, "with one missing params");
        expect(lookupChar("test")).to.equal(undefined, "with one missing params");
        expect(lookupChar(1)).to.equal(undefined, "with one missing params");
    });

    it("tests with two inivalid param types", () => {
        expect(lookupChar([], [])).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar([], {})).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar([], null)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar([], "test")).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar([], -1.5)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar([], 1.5)).to.equal(undefined, "with two inivalid param types");

        expect(lookupChar({}, [])).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar({}, {})).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar({}, null)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar({}, "test")).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar({}, -1.5)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar({}, 1.5)).to.equal(undefined, "with two inivalid param types");

        expect(lookupChar(null, [])).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(null, {})).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(null, null)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(null, "test")).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(null, -1.5)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(null, 1.5)).to.equal(undefined, "with two inivalid param types");

        expect(lookupChar(1, [])).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(1, {})).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(1, null)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(1, "test")).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(1, -1.5)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(1, 1.5)).to.equal(undefined, "with two inivalid param types");

        expect(lookupChar(1.5, [])).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(1.5, {})).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(1.5, null)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(1.5, "test")).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(1.5, -1.5)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(1.5, 1.5)).to.equal(undefined, "with two inivalid param types");

        expect(lookupChar(-1.5, [])).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(-1.5, {})).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(-1.5, null)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(-1.5, "test")).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(-1.5, -1.5)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar(-1.5, 1.5)).to.equal(undefined, "with two inivalid param types");

        expect(lookupChar("", [])).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar("", {})).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar("", null)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar("", "test")).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar("", -1.5)).to.equal(undefined, "with two inivalid param types");
        expect(lookupChar("", 1.5)).to.equal(undefined, "with two inivalid param types");
    });

    it("tests with inivalid type of first param ", () => {
        expect(lookupChar([], 1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar({}, 1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(null, 1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(-1.5, 1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(-1, 1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(0, 1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(1, 1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(1.5, 1)).to.equal(undefined, "inivalid type of first param");

        expect(lookupChar([], -1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar({}, -1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(null, -1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(-1.5, -1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(-1, -1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(0, -1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(1, -1)).to.equal(undefined, "inivalid type of first param");
        expect(lookupChar(1.5, -1)).to.equal(undefined, "inivalid type of first param");
    });

    it("tests with inivalid type of second param ", () => {
        expect(lookupChar("test", [])).to.equal(undefined, "inivalid type of second param");
        expect(lookupChar("test", {})).to.equal(undefined, "inivalid type of second param");
        expect(lookupChar("test", null)).to.equal(undefined, "inivalid type of second param");
        expect(lookupChar("test", "test")).to.equal(undefined, "inivalid type of second param");
        expect(lookupChar("test", -1.5)).to.equal(undefined, "inivalid type of second param");
        expect(lookupChar("test", 1.5)).to.equal(undefined, "inivalid type of second param");
        expect(lookupChar("test", "1")).to.equal(undefined, "inivalid type of second param");
    });
})

describe("test for invalid index", () => {
    it("test for invalid index", () => {
        expect(lookupChar("test", -1)).to.equal("Incorrect index", "negative index");
        expect(lookupChar("test", "test".length)).to.equal("Incorrect index", "outside index");
        expect(lookupChar("test", "test".length + 1)).to.equal("Incorrect index", "outside index");
    });
})

describe("test for correct result", () => {
    it("test for correct result", () => {
        expect(lookupChar("test", 0)).to.equal("t", "index 0 not working");
        expect(lookupChar("test", 2)).to.equal("s", "index 2 not working");
        expect(lookupChar("test", "test".length - 1)).to.equal("t", "last index not working");
    });
})