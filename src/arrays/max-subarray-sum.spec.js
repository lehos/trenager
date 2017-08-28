let assert = require("chai").assert
let getMaxSubSum = require('./max-subarray-sum.js')

describe("Max subarray summ", function() {
    it("max subsum of [1, 2, 3] == 6", function() {
        assert.equal(getMaxSubSum([1, 2, 3]), 6)
    })

    it("max subsub of [-1, 2, 3, -9] == 5", function() {
        assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5)
    })

    it("max subsum of [-1, 2, 3, -9, 11] == 11", function() {
        assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11)
    })

    it("max subsum of [-2, -1, 1, 2] == 3", function() {
        assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3)
    })

    it("max subsum of [100, -9, 2, -3, 5] == 100", function() {
        assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100)
    })

    it("max subsum of [] == 0", function() {
        assert.equal(getMaxSubSum([]), 0)
    })

    it("max subsum of [-1] == 0", function() {
        assert.equal(getMaxSubSum([-1]), 0)
    })

    it("max subsum of [-1, -2] == 0", function() {
        assert.equal(getMaxSubSum([-1, -2]), 0)
    })
})