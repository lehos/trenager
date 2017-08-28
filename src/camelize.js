/**
 * Transforms strings like 'my-short-string' to 'myShortString'
 * @param {String} str
 */
function camelize(str) {
    let parts = str.split('-')
    return parts.map((word, index) => {
        if (index === 0) {
            return word
        }
        let upped = word.charAt(0).toUpperCase()    // 'S'
        let chars = word.split('')                  // ['s', 'h', 'o', 'r', 't' ]
        chars.splice(0, 1, upped)                   // ['S', 'h', 'o', 'r', 't' ]
        return chars.join('')                       // 'Short'
    }).join('')
}

module.exports = camelize