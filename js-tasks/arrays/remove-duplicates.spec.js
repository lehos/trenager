let assert = require("chai").assert
let removeDuplicates = require('./remove-duplicates.js')

describe("Remove duplicates from array", function() {
    it("should remove duplicates", function() {
        let input = [1, 2, 3, 1, 10, 23, 2, 1]
        let expected = [1, 2, 3, 10, 23]
        assert(removeDuplicates(input), expected)
    })
})