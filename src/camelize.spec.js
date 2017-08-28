let assert = require("chai").assert
let camelize = require('./camelize')

describe('Camelize strings', function() {
    it('should transform "my-short-string" to "myShortString"', function() {
        let result = camelize('my-short-string')
        assert.equal(result, 'myShortString')
    })
})