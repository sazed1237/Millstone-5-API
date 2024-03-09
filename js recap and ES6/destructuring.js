const fish = {
    name: 'pangushh',
    address: 'pabna',
    color: 'silver',
    price: 300,
    phone: '01754545245'
}


const {name} = fish;
console.log(name);


// const price = fish.price;
// const color = fish.color;
// const phone = fish.phone;

// console.log(price)
// console.log(color)
// console.log(phone)






// easy way
const {name1, age, profession, salary, mobile} = {
    name1: 'ali ahamed',
    age: 30,
    profession: 'Programar',
    salary: 3300,
    mobile: '0187545455'
}

// console.log(salary)



// array destructuring
const [first, another, furth] = [21, 44, 56, 88, 78, 12]
console.log(first, furth, another)


const heros = ['tony stark', 'rogars', 'sam', 'hulk', 'thor']
const [romantic, captain, friend, doctor, god] = heros;
console.log(romantic, god)


function getName(){
    const name =  ['salim', 'jalim'];
    return name
}

const [baba, chacha] = getName();
console.log(chacha, baba)