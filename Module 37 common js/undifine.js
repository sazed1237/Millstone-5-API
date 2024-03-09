/*
8 ways to get undefine 

1.variable that is not initialized will give undefined
2. function with no return 
3. parameter that is not passed will be undefined

*/
// 1.
let first;

// 2.
function secound(a, b){
    const c = a + b;
}

function third(x, y){
    let total = x + y;
    return total
}