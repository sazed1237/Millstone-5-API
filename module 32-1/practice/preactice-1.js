const oddNumbers = [1, 3, 5, 7, 9, 11, 13]

// using map()
const evenNumber = oddNumbers.map(Number => Number + 1);
console.log(evenNumber)


// using for loop
for(let i = 0; i < oddNumbers.length; i++){
    const evenNumber1 = oddNumbers[i] + 1
    console.log(evenNumber1);
}
