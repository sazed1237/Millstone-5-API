function greeting(fun, name){
    console.log(fun(), name)
}

const nam = 'Hanry Bunks'

function greetingHandler(){
    const text = 'good morning'
    return text
}

greeting(greetingHandler, nam)


// 2nd
function greetingEvening(){
    const x = 'good Evening'
    return x;
}

greeting(greetingEvening, 'Tom Solaiman')


// 3rd
function greetingNight(name){
    const text = 'Good Night'
    return text
}
greeting(greetingNight, 'jhankar kaka')
