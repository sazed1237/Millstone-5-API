const student = {
    name: 'Fredie',
    age: 26
}

const age = student.age
console.log(age)

let data = {
    location: [
    {
        latitude: '34.5, 37.8',
        longitude: '98.77, 58.7',
        city: 'Hyderabad',
        country: 'India'
    }
    ]
}

const findCity = data.location.map(x => x.city)
console.log(findCity)