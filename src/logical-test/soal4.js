const countAverage = (numbers) => {
    let sum = 0;
    numbers.forEach(number => {
        sum += number
    })
    return sum / numbers.length;
}
const findMinMaxAverage = (input) => {
    const splittedInput = input.split(/[, ]/gm);
    const inputToNumber = []
    splittedInput.forEach(number => {
        inputToNumber.push(Number(number))
    });
    const result = {
        max: Math.max(...inputToNumber),
        min: Math.min(...inputToNumber),
        average: Number(countAverage(inputToNumber).toFixed(2))
    }
    return result
}

const numbers2 = findMinMaxAverage("20 21 80 21 55 31 22")
const numbers3 = findMinMaxAverage("20,21,80,21,55,31,22")
const numbers4 = findMinMaxAverage("20,21 80 21,55,31,22")

console.log(numbers2)
console.log(numbers3)
console.log(numbers4)