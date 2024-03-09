const numbers = [1, 2, 3, 4, 5, 6, 7]

const totalNumber = numbers.reduce((previous, current) => (previous + current), 0);
console.log(totalNumber)


const total = numbers.reduce((previous, current) => {
    return previous + current
}, 0)

console.log(total);