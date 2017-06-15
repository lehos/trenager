let assert = require("chai").assert
let getFibonacciNumber = require('./fibonacci')

describe('Get proper n-th Fibonacci number', function() {
    it('should be 144 when n = 25', function() {
        assert.equal(getFibonacciNumber(12), 144)
    })

    it('should be 3 when n = 4', function() {
        assert.equal(getFibonacciNumber(4), 3)
    })
})
