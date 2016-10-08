// Напишите функцию, принимающую массив произвольных слов и на выходе дающую двумерный массив анаграмм:
// ['стол', 'барокко', слот', 'кот', 'кошка', 'ток', 'коробка']
// ->
// [['стол', 'слот'], ['кот', 'ток'], ['барокко', 'коробка']]

function arrayAnagram(arr) {
    let result = []
    let sorted = arr.map(elem => elem.split('').sort().join(''))
    //storage for second anagram indexes, to exclude them in next iterations
    let trash = []

    arr.forEach((elem, i) => {
        if (trash.indexOf(i) != -1) {
            return
        }

        // get index of second anagram
        let j = sorted.indexOf(sorted[i], i + 1)

        // if there is no anagram - quit
        if (j == -1) {
            return
        }

        trash.push(j)
        result.push([elem, arr[j]])
    })
    return result
}

module.exports = arrayAnagram