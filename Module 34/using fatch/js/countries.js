
const loadCoutries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries)

// 1. we can convert array to object
    // for(const country of countries){
    //     console.log(country)
    // } 

    countries.forEach(country => {
        console.log(country.cca2)
        const countriesContainer = document.getElementById('countries-container')
        const countryDiv = document.createElement('div')
        countryDiv.classList = 'contries'
        countryDiv.innerHTML = `
            <h3>Country: ${country.name.common} </h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'} </p>
            <button onClick="countryDitails('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv)
    });
}



const countryDitails = code =>{
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayDitails(data))
}


const displayDitails = country =>{
    const showDetailsContainer = document.getElementById('show-details-container')
    console.log(country[0].languages)
    showDetailsContainer.innerHTML = `
        <img src="${country[0].flags.png}" alt="">        
        <h3>Country: ${country[0].name.common} </h3>
        <p>Capital: ${country[0].capital ? country[0].capital[0] : 'No Capital'} </p>
        <p>Languages: ${country[0].languages}</p>

    `

}


loadCoutries()





