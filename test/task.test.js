const assert = require('chai').assert;

const findFirstMissingNaturalNumber = require('../src/task')

describe('src/task.js', () => {
    describe('#findFirstMissingNaturalNumber()', () => {
        it('should return undefined when did not find natural number', () => {
            const number = findFirstMissingNaturalNumber([-2,-1,0,1])

            assert.isUndefined(number)
        });

        it('should return fist found natural number', () => {
            const number = findFirstMissingNaturalNumber([-2,1,0,2,4,5])
            const expectedNumber = 3;

            assert.isNumber(number);
            assert.equal(number, expectedNumber);
        });

        it('should return undefined without params', () => {
            const number = findFirstMissingNaturalNumber()

            assert.isUndefined(number)
        });
    });
});

