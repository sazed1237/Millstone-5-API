
const loadQuotes = async() => {
    const url = 'https://api.kanye.rest/'
    try{
        const res = await fetch(url)
        const data = await res.json()
        displayQuote(data)
    }
    catch(error){
        console.log(error)
    }
}


const displayQuote = (quotes) =>{
    const quoteContainer = document.getElementById('quote-container')
    quoteContainer.innerHTML = `
        <p>Quote: ${quotes.quote} </p>
        <button onclick="loadQuotes()" >Refresh Quote</button>
    
    `  

    console.log(quotes.quote)
}


loadQuotes()