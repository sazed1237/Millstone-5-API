const products = [
    {id: 1, name: 'Walton', price: 19542, color: 'silver'},
    {id: 2, name: 'Samsung', price: 35000, color: 'gray'},
    {id: 3, name: 'Xaomi', price: 60000, color: 'black'},
    {id: 4, name: 'onePlus', price: 55015, color: 'blue'},
    {id: 5, name: 'iPhone-14', price: 150000, color: 'white'},
]

const cheapPrice = products.filter(product => product.price > 50000)
// console.log(cheapPrice)

const findId = products.find(id => id.id === 5)
// console.log(findId)

const modulus = products.filter(product => product.price % 3 === 0)
console.log(modulus);