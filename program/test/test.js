const chai = require('chai');
const expect = chai.expect;
const { getFactorial, multiply } = require('./functions'); 

describe('getFactorial Function', function() {
    it('should return 120 for an input of 5', function() {
        expect(getFactorial(5)).to.equal(120);
    });

    it('should return 120 for a string input of "5"', function() {
        expect(getFactorial('5')).to.equal(120);
    });

    it('should return "not a number" for a non-numeric string input', function() {
        expect(getFactorial('blabla')).to.equal('not a number');
    });
});

describe('multiply Function (Currying)', function() {
    it('should return 60 for a chained call of (2)(3)(10)', function() {
        expect(multiply(2)(3)(10).valueOf()).to.equal(60);
    });

    it('should return -768224 for a chained call of (-1)(677)(568)(2)', function() {
        expect(multiply(-1)(677)(568)(2).valueOf()).to.equal(-768224);
    });

    it('should return 3 for a single call of (3)', function() {
        expect(multiply(3).valueOf()).to.equal(3);
    });
});
