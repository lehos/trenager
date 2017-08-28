let assert = require("chai").assert
let findUnion = require('./array-union.js')

describe('Array union', function() {
    it('should work when 1st array is bigger', function() {
        let ar1 = [1, 3, 5, 20, 10, 4]
        let ar2 = [2, 4, 1, 3, 11]
        let union = findUnion(ar1, ar2)
        assert.deepEqual(union, [1, 3, 4])
    })
    it('should work when 2nd array is bigger', function() {
        let ar1 = [2, 4, 1, 3, 11]
        let ar2 = [1, 3, 5, 8, 10, 20, 4]
        let union = findUnion(ar1, ar2)
        assert.deepEqual(union, [4, 1, 3])
    })
    it('should work when arrays have equal size', function() {
        let ar1 = [1, 3, 5, 4, 10]
        let ar2 = [2, 4, 1, 3, 11]
        let union = findUnion(ar1, ar2)
        assert.deepEqual(union, [1, 3, 4])
    })
    it('should have only unique numbers in result', function() {
        let ar1 = [1, 3, 5, 10, 244, 325, 33, 23, 4, 5, 2, 1, 4]
        let ar2 = [234, 4, 12, 45, 56, 7, 1, 3, 1]
        let union = findUnion(ar1, ar2)
        assert.deepEqual(union, [1, 3, 4])
    })
})