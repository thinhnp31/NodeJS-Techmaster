var assert = require("assert");
var chai = require("chai");
var expect = chai.expect;
require("./StringExtend.js");

describe("String", function() {
    describe("reverse()", function() {
        it("reverse string love", function() {
            expect("love".reverse()).to.equal("evol");
        })
    })
})