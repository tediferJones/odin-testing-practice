const analyzeArray = require('./analyzeArray.js');

test('basic test', () => {
    let testArr = analyzeArray([1,2,3,4,5])
    expect(testArr.average).toBe(3)
    expect(testArr.min).toBe(1)
    expect(testArr.max).toBe(5)
    expect(testArr.length).toBe(5)
})

test('odin example', () => {
    let testArr = analyzeArray([1,8,3,4,2,6]);
    expect(testArr.average).toBe(4)
    expect(testArr.min).toBe(1)
    expect(testArr.max).toBe(8)
    expect(testArr.length).toBe(6)
})

test('repetitive array', () => {
    let testArr = analyzeArray([1,1,1,1]);
    expect(testArr.average).toBe(1)
    expect(testArr.min).toBe(1)
    expect(testArr.max).toBe(1)
    expect(testArr.length).toBe(4)
})
