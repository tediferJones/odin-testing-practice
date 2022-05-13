const calculator = require('./calculator.js');

test('test add function', () => {
    expect(calculator(5, 'plus', 5)).toBe(10)
})

test('test minus function', () => {
    expect(calculator(5, 'minus', 3)).toBe(2)
})

test('test multiply function', () => {
    expect(calculator(5, 'multiply', 2)).toBe(10)
})

test('test divide function', () => {
    expect(calculator(15, 'divide', 3)).toBe(5)
})

test('test incorrect operator', () => {
    expect(calculator(5, 'hello', 2)).toBe('incorrect operator')
})

test('add decimals', () => {
    expect(calculator(5.25, 'plus', 2.75)).toBe(8)
})

test('subtract decimals', () => {
    expect(calculator(5.5, 'minus', 2.5)).toBe(3)
})

test('multiply decimals', () => {
    expect(calculator(5, 'multiply', 2.5)).toBe(12.5)
})

test('divide decimals', () => {
    expect(calculator(5.5, 'divide', 2)).toBe(2.75)
})




