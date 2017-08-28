/**
 * Transforms strings like 'my-short-string' to 'myShortString'
 * @param {String} str
 */
function camelize(str) {
    let parts = str.split('-')
    parts.forEach((part, index) => {
        if (index === 0) {
            return
        }

        let upped = part.charAt(0).toUpperCase()    // 'S'
        let chars = part.split('')                  // ['s', 'h', 'o', 'r', 't' ]
        chars.splice(0, 1, upped)                   // ['S', 'h', 'o', 'r', 't' ]
        parts[index] = chars.join('')               // 'Short'
    })
    return parts.join('')
}

module.exports = camelize