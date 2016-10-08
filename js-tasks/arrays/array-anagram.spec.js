let assert = require("chai").assert;
let arrayAnagram = require('./array-anagram')
describe('Array to array of anagrams', function() {
    it('should create array of anagrams', function() {
        let arr = ['стол', 'барокко', 'слот', 'кот', 'кошка', 'ток', 'коробка']
        let result = arrayAnagram(arr)
        let expected = [['стол', 'слот'], ['барокко', 'коробка'], ['кот', 'ток']]
        assert.deepEqual(result, expected)
    })
});