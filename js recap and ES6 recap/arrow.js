function add(num1, num2){
    const total = num1 + num2; 
    return total
}

const result = add(21, 11)
// console.log(result)


const sum = (n1, n2) => n1 + n2;

const result2 = sum(5, 5)
// console.log(result2)

const doMath = (number, number2) => {
    const multi = number * 2;
    const sum = multi + number2
    const divison = sum / 2
    const modulus = divison % 3 === 0;
    return modulus;
}

const result3 = doMath(5, 41);
console.log(result3)