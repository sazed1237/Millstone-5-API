const data = {
    count: 5000,
    data: [
        {id: 1, name: 'sadik', job: 'Leader'},
        {id: 2, name: 'sharif', job: 'Manager'}
    ]
}

const secondJob = data.data[1].job
// console.log(secondJob)



const  user = {
    id: 5001,
    name: 'thomas alba edison',
    address: {
        street: {

            first: '35/A Dhankhet Mor',
            second: 'atikullah lan',
            thrid: '2nd floor'
        }
    },
    postOffice: 'Mirpur 1',
    city: 'Dhaka'
}

const  userFloor = user.address.street.thrid
console.log(userFloor)
