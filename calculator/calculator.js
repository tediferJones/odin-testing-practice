function calculator(firstTerm, operator, secondTerm) {
    switch (operator) {
        case 'plus':
            return firstTerm + secondTerm;
        case 'minus':
            return firstTerm - secondTerm;
        case 'multiply':
            return firstTerm * secondTerm;
        case 'divide':
            return firstTerm / secondTerm;
        default:
            return "incorrect operator"
    }
}

module.exports = calculator;
