const caesarCipher = require('./caesarCipher');

test('postive shift factor', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd')
})

test('negative shift factor', () => {
    expect(caesarCipher('bcd', -1)).toBe('abc')
})

test('works with capital letters', () => {
    expect(caesarCipher('AbC', 1)).toBe('BcD')
})

test('works with numbers', () => {
    expect(caesarCipher('123', 1)).toBe('234')
})

test('works with crazy punctuation and spaces', () => {
    expect(caesarCipher('{ | }', 1)).toBe('|!}!~')
})

test('postive shift factor rollover (ascii code greater than 127)', () => {
    expect(caesarCipher('abc', 94)).toBe('abc')
})

test('negative shift factor rollover (ascii code less than 32)', () => {
    expect(caesarCipher('abc', -94)).toBe('abc')
})

test('absurdly large shift factor (10x + 1)', () => {
    expect(caesarCipher('abc', 941)).toBe('bcd')
})
