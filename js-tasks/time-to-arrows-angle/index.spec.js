// Напишите функцию, принимающую на вход время (в любом формате)
// и возвращающую угол между стрелками аналоговых часов.

let assert = require("chai").assert;
let timeToAngle = require('./index')
describe.only('Convert time to angle between watch arrows:', function() {
    it('time is 0:00, angle = 0', function() {
        let time = '0:00'
        assert.equal(timeToAngle(time), 0)
    })
    it('time is 00:15, angle = 90', function() {
        let time = '00:15'
        assert.equal(timeToAngle(time), 90)
    })
    it('time is 0.15, angle = 90', function() {
        let time = '0:15'
        assert.equal(timeToAngle(time), 90)
    })
    it('time is 0,45, angle is 90', function() {
        let time = '0,45'
        assert.equal(timeToAngle(time), 90)
    })
    it('time is 12-45, angle is 90', function() {
        let time = '12-45'
        assert.equal(timeToAngle(time), 90)
    })
    it('time is 18.45, angle is 90', function() {
        let time = '18.45'
        assert.equal(timeToAngle(time), 90)
    })
    it('time is 2:45, angle is 90', function() {
        let time = '2:45'
        assert.equal(timeToAngle(time), 150)
    })
    it('should quit is wrong time format', function() {
        assert.equal(timeToAngle('blabla'), "could not parse time")
    })
})

