
const user = {
    name: 'azmal',
    phone: '01846512154',
    email: 'helpinfo@gmail.com',
    address: {
        floor: '2nd F-D',
        house: '237/1 shadhin ',
        len: 'atikullah sarani',
        streat: 'Dhankhet mor, mirpur- 1',
        city: 'Dhaka'
    }
}


const userHouse = user['address']['floor']
console.log(userHouse);

const userPhone = user.phone
console.log(userPhone)