const numbers = [12, 45, 42, 33, 11, 22, 15, 19, 42, 20];
const bigNums = numbers.filter(number => number >= 20);
const smallNums = numbers.filter(n => n <= 15)
// console.log(bigNums);
// console.log(smallNums)




const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 105000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 25000},
]

// const bigPrice = products.filter(p => p.price > 30000);
const bigPrice = products.filter(p => p.price < 30000);
console.log(bigPrice);