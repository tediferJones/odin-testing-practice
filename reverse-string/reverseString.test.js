const reverseString = require('./reverseString.js');

test('reverse single word', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('reverse multiple words', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh')
})

test('reverse string with random capitals and punctuation', () => {
    expect(reverseString('hElLo WoRlD.!?,')).toBe(',?!.DlRoW oLlEh')
})
