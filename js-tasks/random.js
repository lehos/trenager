/**
 * returns random number between given min & max
 * @param number min 
 * @param number max 
 */
function random(min, max) {
    return min + Math.random() * (max - min)
}


/**
 * returns random integer between given min & max
 * @param number min 
 * @param number max 
 */
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1))
}

module.exports.random = random
module.exports.randomInt = randomInt