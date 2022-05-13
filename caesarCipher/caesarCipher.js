function caesarCipher(str, shiftFactor) {
    let returnString = '';
    let currentChar = 0;
    while (currentChar < str.length) {
        let newCharCode = str.charCodeAt(currentChar) + shiftFactor
        while (newCharCode > 127) {
            newCharCode -= 94;
        }
        while (newCharCode < 32) {
            newCharCode += 94;
        }
        returnString += String.fromCharCode(newCharCode);
        currentChar++;
    }
    return returnString;
}

module.exports = caesarCipher;