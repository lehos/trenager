/**
 * Find prime numbers with 'Sieve of Eratosthenes' algorithm
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @param {Number} n - max number
 * @returns {Object} - {primes: Number[], count: Number, sum: Number}
 */
function sieveOfEratosthenes(n = 100) {
    let sieve = []
    let primes = []
    let sum = 0
    let i
    let currentPrimeIndex = 2

    for (let i = 2; i < n; i++) {
        sieve[i] = true
    }

    do {
        for (i = 2 * currentPrimeIndex; i < n; i += currentPrimeIndex) {
            sieve[i] = false
        }

        for (i = currentPrimeIndex + 1; i < n; i++) {
            if (sieve[i]) break
        }

        currentPrimeIndex = i;
    } while (currentPrimeIndex * currentPrimeIndex < n)

    for (i = 0; i < sieve.length; i++) {
        if (sieve[i]) {
            sum += i
            primes.push(i)
        }
    }

    return {primes, count: primes.length, sum}
}


/**
 * Find prime numbers with my own algorithm
 * @param {Number} n - max number
 * @returns {Object} - {primes: Number[], count: Number, sum: Number}
 */
function findPrimes(n = 100) {
    let sieve = []
    let primes = []
    let sum = 0

    for (let i = 2; i <= n; i++) {
        sieve.push(i)
    }

    while (sieve.length > 0) {
        let currentPrime = sieve[0]
        primes.push(currentPrime)

        sieve = sieve.filter(elem => elem % currentPrime !== 0)
    }

    primes.forEach(elem => sum += elem)

    return {primes, count: primes.length, sum}
}


function isPrime(n) {
    let divisor = 3
    let limit = Math.sqrt(n)

    //check simple cases
    if (n === 2 || n === 3) {
        return true
    }
    if (n % 2 === 0) {
        return false
    }

    while (divisor <= limit) {
        if (n % divisor === 0) {
            return false
        } else {
            divisor += 2
        }
    }
    return true
}


module.exports = {
    sieveOfEratosthenes,
    findPrimes,
    isPrime
}