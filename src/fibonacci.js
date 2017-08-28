/**
 * Get nth fibonacci number
 * @param {number} n
 */
function getFibonacciNumber(n) {
    let fibo = [0, 1]

    if (n <= 2) {
        return 1
    }

    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2]
    }

    return fibo[n]
}

module.exports = getFibonacciNumber