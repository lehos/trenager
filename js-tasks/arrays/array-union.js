// Given two arrays of integers
// Find common elements

function findUnion(array1, array2) {
    let result = []
    array1.forEach(elem => {
        for (let j = 0; j < array2.length; j++) {
            if (elem == array2[j] && result.indexOf(elem) == -1) {
                result.push(elem)
                array2.splice(j, 1) // no need this elem in further iteratins
                break
            }
        }
    })
    return result
}

module.exports = findUnion