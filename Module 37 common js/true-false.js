



let x = []
console.log(x)
if(x){
    console.log('value of x is truthy')
}
else{
    console.log('value of x is falsy')
}


// check falsy
const y = null;
if(!y){
    console.log('value is falsy')
}

// check truthy
const z = 'slgh'
if(!!z){
    console.log('value is truthy ')
}