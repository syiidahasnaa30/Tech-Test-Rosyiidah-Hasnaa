const getRandomNumber = (n) => {
    const array = [];
    for (let i = 0; i <= n; i++) {
        array.push(Math.floor(Math.random() * 100))
    }
    return array
}

console.log(getRandomNumber(10))