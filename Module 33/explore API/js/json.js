const user = {id: 1, name: 'sabbir', job: 'programmer'}

const stringified = JSON.stringify(user);

console.log('JS:', user)
console.log('JSON:', stringified)


const shop = {
    name: 'Sazed Creations',
    address: {
        street: 'DhanKhet Mor',
        city: 'Dhaka',
        country: 'BD',
    },
    revenue: 50000,
    isOpen: true,
    isNew: false
}

console.log(shop);

const shopStrigifed = JSON.stringify(shop);
console.log(shopStrigifed)


const strObj = JSON.parse(shopStrigifed);
console.log(strObj)