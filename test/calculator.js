const assert = require("chai").assert;
const expect = require("chai").expect;
const Calculator = require("../app/calculator");

describe("Calculator Tests", function () {
    it("add(5,2) expected result 7 PASS", function () {
        expect(Calculator.add(2, 5)).equals(7);
    });

    it("add(5,2) expected result 8 FAIL", function () {
        expect(Calculator.add(2, 5)).equals(8);
    });

    it("sub(5,2) expected result 3 PASS", function () {
        expect(Calculator.sub(5, 2)).equals(3);
    });

    it("sub(5,2) expected result 5 FAIL", function () {
        expect(Calculator.add(5, 2)).equals(5);
    });

    it("mul(5,2) expected result 10 PASS", function () {
        expect(Calculator.mul(5, 2)).equals(10);
    });

    it("mul(5,2) expected result 12 FAIL", function () {
        expect(Calculator.mul(5, 2)).equals(12);
    });

    it("div(10,2) expected result 5 PASS", function () {
        expect(Calculator.div(10, 2)).equals(5);
    });

    it("div(10,2) expected result 2 FAIL", function () {
        expect(Calculator.div(10, 2)).equals(2);
    });
});
