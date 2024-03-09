const peaple = [
    {name: 'meana', age: 20},
    {name: 'rina', age: 15},
    {name: 'Suchorita', age: 22},
]

const totalAge = peaple.reduce((x, y) => (x + y.age), 0)
console.log(totalAge)



// using for loop 
const ageArr = peaple.map(x => x.age)
// console.log(ageArr)
let sum = 0;
for(let i = 0; i < ageArr.length; i++){
    sum += ageArr[i];
}
console.log(sum)