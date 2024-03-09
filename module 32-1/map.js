const numbers = [2, 4, 6, 8, 7, 5, 3];
// const outPut = [];

// for(const number of numbers){
//     const doubled = number * 3 ;
//     outPut.push(doubled);
// }
// console.log(outPut);



function getDoubles(numbers){
    const outPut = [];

for(const number of numbers){
    const doubled = number * 2 ;
    outPut.push(doubled);
}
return outPut
}



function doubleItOld(num){
    return num * 2;
}


const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);

const fiveTimes = [1, 2, 3, 4, 5].map(x => x * 5);
// console.log(fiveTimes);

// console.log(makeDoubleDirect);
// console.log(makeDouble2);


const result = getDoubles(numbers)
// console.log(result);
// console.log(makeDouble);




const numberss = [12, 54, 32, 15, 7, 65];
const half = numberss.map(number => number/2);

console.log(half);