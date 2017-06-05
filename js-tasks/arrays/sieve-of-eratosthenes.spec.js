let assert = require("chai").assert
let primes = require('./sieve-of-eratosthenes')

describe('Test primes in range 0..100 found my Sieve of Eratosthenes algorithm', function() {
    let result = primes.sieveOfEratosthenes(100)

    it('should have 25 primes', function() {
        assert.equal(result.count, 25)
    })

    it('should return 1060 as sum of primes', function() {
        assert.equal(result.sum, 1060)
    })
})

describe('Test primes in range 0..100 found my hand made algorithm', function() {
    let result = primes.findPrimes(100)

    it('should have 25 primes', function() {
        assert.equal(result.count, 25)
    })

    it('should return 1060 as sum of primes', function() {
        assert.equal(result.sum, 1060)
    })
})