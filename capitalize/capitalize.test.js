const capitalize = require('./capitalize.js');

test('capitalize first letter of single word', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('capitalize first letter of first word', () => {
    expect(capitalize('hello world')).toBe('Hello world');
})

test('no fail if first character is number', () => {
    expect(capitalize('7ello')).toBe('7ello');
})

test('no fail if first character is white space', () => {
    expect(capitalize(' hello')).toBe(' hello');
})