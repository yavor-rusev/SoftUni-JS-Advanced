import { assert } from "chai";
import { mathEnforcer } from "../04. Math Enforcer/Math-Enforcer.js";

describe("mathEnforcer", () => {
    describe("addFive(num)", () => {
        it("tests with invalid param", () => {
            assert.isUndefined(mathEnforcer.addFive(), "invalid param");
            assert.isUndefined(mathEnforcer.addFive([]), "invalid param");
            assert.isUndefined(mathEnforcer.addFive({}), "invalid param");
            assert.isUndefined(mathEnforcer.addFive(null), "invalid param");
            assert.isUndefined(mathEnforcer.addFive(""), "invalid param");
            assert.isUndefined(mathEnforcer.addFive("1"), "invalid param");
            assert.isUndefined(mathEnforcer.addFive("test"), "invalid param");
        });

        it("tests with valid param", () => {
            assert.equal(mathEnforcer.addFive(-5.5), -0.5, "summing is broken");
            assert.equal(mathEnforcer.addFive(-5), 0, "summing is broken");
            assert.equal(mathEnforcer.addFive(-0.5), 4.5, "summing is broken");
            assert.equal(mathEnforcer.addFive(0), 5, "summing is broken");
            assert.equal(mathEnforcer.addFive(0.5), 5.5, "summing is broken");
            assert.equal(mathEnforcer.addFive(5), 10, "summing is broken");
        });
    })

    describe("subtractTen(num)", () => {
        it("tests with invalid param", () => {
            assert.isUndefined(mathEnforcer.subtractTen(), "invalid param");
            assert.isUndefined(mathEnforcer.subtractTen([]), "invalid param");
            assert.isUndefined(mathEnforcer.subtractTen({}), "invalid param");
            assert.isUndefined(mathEnforcer.subtractTen(null), "invalid param");
            assert.isUndefined(mathEnforcer.subtractTen(""), "invalid param");
            assert.isUndefined(mathEnforcer.subtractTen("1"), "invalid param");
            assert.isUndefined(mathEnforcer.subtractTen("test"), "invalid param");
        });

        it("tests with valid param", () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20, "subtracting is broken");
            assert.equal(mathEnforcer.subtractTen(-1), -11, "subtracting is broken");
            assert.equal(mathEnforcer.subtractTen(-0.5), -10.5, "subtracting is broken");
            assert.equal(mathEnforcer.subtractTen(0), -10, "subtracting is broken");
            assert.equal(mathEnforcer.subtractTen(0.5), -9.5, "subtracting is broken");
            assert.equal(mathEnforcer.subtractTen(1), -9, "subtracting is broken");
            assert.equal(mathEnforcer.subtractTen(10), 0, "subtracting is broken");
            assert.equal(mathEnforcer.subtractTen(20), 10, "subtracting is broken");
        });
    })

    describe("sum(num1, num2)", () => {
        it("invalid params", () => {
            assert.isUndefined(mathEnforcer.sum(), "missing param");
            assert.isUndefined(mathEnforcer.sum([]), "missing param");
            assert.isUndefined(mathEnforcer.sum({}), "missing param");
            assert.isUndefined(mathEnforcer.sum(null), "missing param");
            assert.isUndefined(mathEnforcer.sum(""), "missing param");
            assert.isUndefined(mathEnforcer.sum("1"), "missing param");
            assert.isUndefined(mathEnforcer.sum("test"), "missing param");

            assert.isUndefined(mathEnforcer.sum([], []), "two invalid param");
            assert.isUndefined(mathEnforcer.sum({}, {}), "two invalid param");
            assert.isUndefined(mathEnforcer.sum(null, null), "two invalid param");
            assert.isUndefined(mathEnforcer.sum("", ""), "two invalid param");
            assert.isUndefined(mathEnforcer.sum("1", "1"), "two invalid param");
            assert.isUndefined(mathEnforcer.sum("test", "test"), "two invalid param");

            assert.isUndefined(mathEnforcer.sum(1), "invalid first param");
            assert.isUndefined(mathEnforcer.sum([], 1), "invalid first param");
            assert.isUndefined(mathEnforcer.sum({}, 1), "invalid first param");
            assert.isUndefined(mathEnforcer.sum(null, 1), "invalid first param");
            assert.isUndefined(mathEnforcer.sum("", 1), "invalid first param");
            assert.isUndefined(mathEnforcer.sum("1", 1), "invalid first param");
            assert.isUndefined(mathEnforcer.sum("test", 1), "invalid first param");


            assert.isUndefined(mathEnforcer.sum(1, []), "invalid second param");
            assert.isUndefined(mathEnforcer.sum(1, {}), "invalid second param");
            assert.isUndefined(mathEnforcer.sum(1, null), "invalid second param");
            assert.isUndefined(mathEnforcer.sum(1, ""), "invalid second param");
            assert.isUndefined(mathEnforcer.sum(1, "1"), "invalid second param");
            assert.isUndefined(mathEnforcer.sum(1, "test"), "invalid second param");

        });

        it("valid params", () => {
            assert.equal(mathEnforcer.sum(-10, -10), -20, "summing is broken");
            assert.equal(mathEnforcer.sum(-10.5, -10), -20.5, "summing is broken");
            assert.equal(mathEnforcer.sum(-10, -10.5), -20.5, "summing is broken");
            assert.equal(mathEnforcer.sum(-10.5, -10.5), -21, "summing is broken");

            assert.equal(mathEnforcer.sum(-10, 10), 0, "summing is broken");
            assert.equal(mathEnforcer.sum(-10.5, 10), -0.5, "summing is broken");
            assert.equal(mathEnforcer.sum(-10, 10.5), 0.5, "summing is broken");
            assert.equal(mathEnforcer.sum(-9.5, 10.5), 1, "summing is broken");

            assert.equal(mathEnforcer.sum(10, -10), 0, "summing is broken");
            assert.equal(mathEnforcer.sum(10.5, -10), 0.5, "summing is broken");
            assert.equal(mathEnforcer.sum(10, -10.5), -0.5, "summing is broken");
            assert.equal(mathEnforcer.sum(9.5, -10.5), -1, "summing is broken");

            assert.equal(mathEnforcer.sum(10, 10), 20, "summing is broken");
            assert.equal(mathEnforcer.sum(10.5, 10), 20.5, "summing is broken");
            assert.equal(mathEnforcer.sum(10, 10.5), 20.5, "summing is broken");
            assert.equal(mathEnforcer.sum(9.5, 10.5), 20, "summing is broken");

            assert.equal(mathEnforcer.sum(10, 0), 10, "summing is broken");
            assert.equal(mathEnforcer.sum(10.5, 0), 10.5, "summing is broken");
            assert.equal(mathEnforcer.sum(0, 10.5), 10.5, "summing is broken");
            assert.equal(mathEnforcer.sum(0, 10), 10, "summing is broken");

            assert.equal(mathEnforcer.sum(-10, 0), -10, "summing is broken");
            assert.equal(mathEnforcer.sum(-10.5, 0), -10.5, "summing is broken");
            assert.equal(mathEnforcer.sum(0, -10.5), -10.5, "summing is broken");
            assert.equal(mathEnforcer.sum(0, -10), -10, "summing is broken");
        });
    })
})

