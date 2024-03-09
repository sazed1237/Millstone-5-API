// console.log('quotes 2 js')

const loadKanyeQuote2 = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => kanyeQuotes(data))
}

const kanyeQuotes = quote =>{
    const blockQuote2 = document.getElementById('block-quote')
    blockQuote2.innerHTML = quote.quote
    // console.log(quote)
}

loadKanyeQuote2()