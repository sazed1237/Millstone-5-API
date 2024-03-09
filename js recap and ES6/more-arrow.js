const add = (first , second) => first + second;
const getFullName = (firstName, lastName) => firstName + ' ' + lastName;
const multiply = (a, b) => a * b;

const result= multiply(15, 5);
console.log(result);


const getPie = () => 3.14;


const doubleIt = (num) => num * 2;

const fiveTimes = num => num * 5;

// multi line arrow function
const  doMath = (x, y, z) => {
    const sumMath = x + y + z;
    const multi = sumMath * z;
    const division = multi / 2;
    return division;
}

const result2 = doMath(14, 21, 2);
console.log(result2)
