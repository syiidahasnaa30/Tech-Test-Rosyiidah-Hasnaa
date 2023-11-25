const countAverage = (numbers) => {
    const sum = numbers.reduce((prevCount, currentCount)=>{
        return prevCount+currentCount
    })
    return sum / numbers.length;
}
const findMinMaxAverage = (input) => {
    const splittedInput = input.split(/[, ]/gm);
    const numbers = splittedInput.map((number)=>Number(number))
    const result = {
        max: Math.max(...numbers),
        min: Math.min(...numbers),
        average: Number(countAverage(numbers).toFixed(2))
    }
    return result
}

const numbers2 = findMinMaxAverage("20 21 80 21 55 31 22")
const numbers3 = findMinMaxAverage("20,21,80,21,55,31,22")
const numbers4 = findMinMaxAverage("20,21 80 21,55,31,22")

console.log(numbers2)
console.log(numbers3)
console.log(numbers4)