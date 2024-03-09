const numbers = [33, 50, 79, 78, 90, 101, 30]

const divisible = numbers.filter(number => number % 10)
console.log(divisible)

const divisible2 = numbers.find(number => number % 10 )
console.log(divisible2)