/**
 * Find prime numbers with 'Sieve of Eratosthenes' algorithm
 * https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
 * @param {Number} n - max number
 * @returns {Object} - {primes: Number[], count: Number, sum: Number}
 */
function sieveOfEratosthenes(n = 100) {
    let arr = []
    let i

    for (let i = 2; i < n; i++) {
        arr[i] = true
    }

    let p = 2
    do {
        for (i = 2 * p; i < n; i += p) {
            arr[i] = false
        }

        for (i = p + 1; i < n; i++) {
            if (arr[i]) break
        }

        p = i;
    } while (p * p < n)

    let sum = 0
    let primes = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i]) {
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

module.exports = {
    sieveOfEratosthenes,
    findPrimes
}