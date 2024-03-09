
const numbers = [1, 2, 3, 4, 5, 6];
// .reduce (accumulatorFunction, initial value)
// accumulatorFunctio use two parameters

const total = numbers.reduce((previous, current) => previous + current, 0)
console.log(total)
const total2 = numbers.reduce((previous, current) => previous + current, 0)
console.log(total2)

const total3 = numbers.reduce((previous, current) => {
    return previous + current
}, 0);

console.log(total3);

const total4 = numbers.reduce((previous, current) => {
    return previous + current
}, 0)

console.log(total4)