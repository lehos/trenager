/**
 * Remove all duplicates in given array of numbers
 * @param {Array} arr
 * @returns {Array}
 */
function removeDuplicates(arr) {
    let origins = {}
    let result = []
    let elem

    for (let i = 0; i < arr.length; i++) {
        elem = arr[i]
        if (!origins[elem]) {
            result.push(elem)
            origins[elem] = true
        }
    }
    return result
}

module.exports = removeDuplicates