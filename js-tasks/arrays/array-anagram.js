// Write a function which accepts array of any words and returns two-dimensional array with anagrams:
// ['стол', 'барокко', слот', 'кот', 'кошка', 'ток', 'коробка']
// ->
// [['стол', 'слот'], ['кот', 'ток'], ['барокко', 'коробка']]

function arrayAnagram(arr) {
    let result = []
    // helper array where each elem is sorted, so anagram elems are equal here
    let sorted = arr.map(elem => elem.split('').sort().join(''))
    //storage for indexes of second anagrams, to exclude them in next iterations
    let trash = []

    arr.forEach((elem, i) => {
        if (~trash.indexOf(i)) {
            return
        }

        // get index of second anagram
        let j = sorted.indexOf(sorted[i], i + 1)

        // if there is no anagram - quit
        if (j === -1) {
            return
        }

        trash.push(j)
        result.push([elem, arr[j]])
    })
    return result
}

module.exports = arrayAnagram