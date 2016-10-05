//Даны два массива целых чисел, найдите общие элементы.

function findUnion(ar1, ar2) {
    let result = []
    ar1.forEach(function(elem1) {
        ar2.forEach(function(elem2, j) {
            if (elem1 == elem2 && result.indexOf(elem1) == -1) {
                result.push(elem1)
                ar2.splice(j, 1)
            }
        })
    })
    return result
}

module.exports = findUnion