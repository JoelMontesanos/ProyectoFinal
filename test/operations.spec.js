const chai = require ('chai');
const {expect} = require('chai');
const assert = chai.assert;
const operations = require('../controllers/operations.controller');


describe('Operations', () => {
    it('Should use sum', () => {
        expect(operations.sum(2,2)).to.equal(4);
    });

    it('Should use multiply', () => {
        expect(operations.multiply(2,2)).to.equal(4);
    });

    it('Should use divide', () => {
        expect(operations.divide(2,2)).to.equal(1);
    });

    it('Should use substract', () => {
        expect(operations.substract(2,2)).to.equal(0);
    });
});