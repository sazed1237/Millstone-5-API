const numbers = [12, 45, 42, 33, 11, 22, 15, 19, 42, 20];

const fives = numbers.find(number => number % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
// console.log(fives);
// console.log(fivesAll);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 105000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 25000},
]

const cheap = products.find(product => product.price < 40000);
const expensive = products.find(product => product.price > 40000);
console.log(cheap);
console.log(expensive)