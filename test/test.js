var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
require("../StringExtend.js");

describe("reverse()", function() {
    it("reverse string love", function() {
        expect("2love".reverse()).to.equal("evol2");
    })
})

describe("camelcase()", function() {
    it("camelcase string nguyen phu thinh", function() {
        expect("nguyen    phu thinh".camelcase()).to.equal("Nguyen    Phu Thinh");
    })
})