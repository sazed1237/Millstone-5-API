const max = Math.max(12, 24,54, 554, 241544, 12, 54,)
// console.log(max)


const numbers = [12, 51, 21, 44, 16];
const largest = Math.max(...numbers);

// console.log(numbers);
// console.log(...numbers);
// console.log(largest);


const numbers2 = [...numbers];
numbers.push(415)
numbers2.push(121)
console.log(numbers)
console.log(numbers2);



const numbers4 = [4545, 5645, ...numbers, 144, 121]
console.log(numbers4); 