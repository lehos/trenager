/**
 * returns random number between given min & max
 * @param {Number} min
 * @param {Number} max
 */
function random(min, max) {
    return min + Math.random() * (max - min)
}


/**
 * returns random integer between given min & max
 * @param {Number} min
 * @param {Number} max
 */
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
}

module.exports.random = random
module.exports.randomInt = randomInt