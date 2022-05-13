function reverseString(str) {
    let reverseString = ''
    let strLength = str.length - 1
    while (strLength >= 0) {
        reverseString += str[strLength]
        strLength--
    }
    return reverseString
}

module.exports = reverseString;