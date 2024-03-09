console.log('quotes js')
const loadKanyeQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => kanyeQuote(data))
}


const kanyeQuote = quote => {
   console.log(quote)
   const blockQuote = document.getElementById('block-quote')
   blockQuote.innerHTML = quote.quote
}

loadKanyeQuote()