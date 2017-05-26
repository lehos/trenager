let assert = require("chai").assert
let randomLib = require('./random')
let random = randomLib.random
let randomInt = randomLib.randomInt

describe('Random between min and max', function() {
    it('should return value in given range', function() {
        let min = 7
        let max = 10
        let result = random(min, max)
        assert.isAtLeast(result, min)
        assert.isAtMost(result, max)
    })
})