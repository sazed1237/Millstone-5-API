// using .reduce
const arr = [1, 9, 17, 22]
const redu = arr.reduce((x , y) => (x + y), 0)
// console.log(redu)


// using for loop
let storSum = 0; 
for(let i = 0; i < arr.length; i++){
    storSum += arr[i] ;
}
console.log(storSum)