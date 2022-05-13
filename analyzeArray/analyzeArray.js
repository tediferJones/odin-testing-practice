function analyzeArray(arr) {
    let totalSum = 0
    let itemCount = 0
    let min = Infinity;
    let max = null;
    let length = 0;
    for (let i in arr) {
        totalSum += arr[i]
        itemCount++

        if (arr[i] > max) {
            max = arr[i];
        }

        if (arr[i] < min) {
            min = arr[i];
        }

        length++
    }
    let average = totalSum / itemCount
    return {
        average,
        min,
        max,
        length,
    }
}

module.exports = analyzeArray;