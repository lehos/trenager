var findUnion = function(ar1, ar2) {
    let aMax, aMin
    let result = []
    if (ar1.length >= ar2.length) {
        aMax = ar1
        aMin = ar2
    } else {
        aMax = ar2
        aMin = ar1
    }

    for (let i = 0; i < aMax.length; i++) {
        for (let j = 0; j < aMin.length; j++) {
            if (aMax[i] == aMin[j] && result.indexOf(aMax[i]) == -1) {
                result.push(aMax[i])

                //removing found element from smaller array
                //to speed up further iterations 
                aMin.splice(j, 1)
            }
        }
    }
    return result
}

module.exports = findUnion;