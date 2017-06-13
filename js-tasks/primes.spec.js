let assert = require("chai").assert
let primes = require('./primes')

describe('Test primes in range 0..100 found by Sieve of Eratosthenes algorithm', function() {
    let result = primes.sieveOfEratosthenes(100)

    it('should have 25 primes', function() {
        assert.equal(result.count, 25)
    })

    it('should return 1060 as sum of primes', function() {
        assert.equal(result.sum, 1060)
    })
})

describe('Test primes in range 0..100 found by my hand made algorithm', function() {
    let result = primes.findPrimes(100)

    it('should have 25 primes', function() {
        assert.equal(result.count, 25)
    })

    it('should return 1060 as sum of primes', function() {
        assert.equal(result.sum, 1060)
    })
})


describe('Check if number is prime', function() {
    let isPrime = primes.isPrime

    it('2 is prime', function() {
        assert.equal(isPrime(2), true)
    })

    it('3 is prime', function() {
        assert.equal(isPrime(3), true)
    })

    it('5 is prime', function() {
        assert.equal(isPrime(5), true)
    })

    it('127 is prime', function() {
        assert.equal(isPrime(127), true)
    })

    it('9 is not a prime', function() {
        assert.equal(isPrime(9), false)
    })

    it('10 is not a prime', function() {
        assert.equal(isPrime(10), false)
    })
})