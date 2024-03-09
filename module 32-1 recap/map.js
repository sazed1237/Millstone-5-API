const numbers = [54, 4, 9, 7, 3, 8, 1];

const doubleIt = numbers.map(number => number * 2)
const modulus = numbers.map(number => number % 2)
// console.log(doubleIt)
// console.log(modulus)



const products = [
    {id: 1, name: 'Walton', price: 19542, color: 'silver'},
    {id: 1, name: 'Samsung', price: 35000, color: 'gray'},
    {id: 1, name: 'Xaomi', price: 60000, color: 'black'},
    {id: 1, name: 'onePlus', price: 55015, color: 'blue'},
    {id: 1, name: 'iPhone-14', price: 150000, color: 'white'},
]

const expensiveItem = products.map(product => product.price > 50000)
// console.log(expensiveItem)
const expensiveLength = products.map(product => product.name.length)
console.log(expensiveLength)
const firstLetterColor = products.map(product => product.color[0])
console.log(firstLetterColor)

const maxNumber = products.map(x => x.name.length);
console.log(maxNumber)