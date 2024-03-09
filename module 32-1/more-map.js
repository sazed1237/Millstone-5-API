
const numberss = [12, 54, 32, 15, 7, 65];
const half = numberss.map(number => number/2);
const third = numberss.map(x => x/3)

// console.log(half);
// console.log(third)

const friends = ['jemi', 'tomi', 'henri', 'lalit']
const firstLetter = friends.map(friend => friend[2]);
// console.log(firstLetter);

const nameLength = friends.map(name => name.length)
// console.log(nameLength)


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'Mobile', price: 105000},
    {id: 1, name: 'watch', price: 35000},
    {id: 1, name: 'tablet', price: 25000},
]

const items = products.map(product => product.price);
console.log(items);