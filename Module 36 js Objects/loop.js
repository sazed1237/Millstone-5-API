const arrys = [12, 32, 1, 54, 32, 87, 5];

for(const arry of arrys){
    console.log(arry)
}


const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
// 1. can not used for of with objects

// for(const btl of bottle){
//     console.log(btl)
// }


// first option to loop through on object
// const keys = Object.keys(bottle)

// for(const key of keys){
//     console.log(key)
// }
const keys = Object.keys(bottle)

for(const key of keys){
    console.log(bottle[key])
}


// for in loop
for(const key in bottle){
    const value = bottle[key]
    console.log(key, ':', value)
}





/*
1. for of loop using with array
2. for in loop using with object
*/
