// Напишите функцию, принимающую на вход время (в любом формате)
// и возвращающую угол между стрелками аналоговых часов.

/**
 * accepted delimiters:
 * ':', '.', ',', '-'
 * @param {string} time (10:30, 12.45, 1-20)
 * @returns {number}
 */
function timeToAngle(time) {
    let formatCheck = /^([0-9]|0[0-9]|1[0-9]|2[0-3])[:|.|,|-][0-5][0-9]$/
    if (!formatCheck.test(time)) {
        return "could not parse time"
    }

    time = time.split(/[:|.|,|-]/)
    let hours = time[0]
    hours = hours < 12 ? hours : hours - 12
    let minutes = time[1]
    let hoursAngle = (hours / 12) * 360
    let minutesAngle = (minutes / 60) * 360

    let result = hoursAngle - minutesAngle
    result = result >= 0 ? result : -result
    result = result <= 180 ? result : 360 - result

    return result
}

module.exports = timeToAngle