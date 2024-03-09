const fruits = {
    name: 'apple',
    price: 300,
    address: 'kashmir',
    phone: '01845464421'
}

const phone = fruits.phone;

console.log(phone);


const data = {
    count: 500,
    datails: [
        {id: 1, name: 'siddik', jobTitle: 'leader'},
        {id: 2, name: 'masud', jobTitle: 'worker'},
        {id: 3, name: 'kasem', jobTitle: 'Manager'},
    ]
}

const masudDitail = data.datails[1].name;
console.log(masudDitail)