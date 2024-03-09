
const loadCountries = async() => {
    const url = 'https://restcountries.com/v3.1/all'
    const res = await fetch(url)
    const data = await res.json()
    displayCountries(data)
}

const displayCountries = countries =>{
    const countriesContainer = document.getElementById('country-container')
    countries.forEach(country => {
        console.log(country.cca2)
        const countryDiv = document.createElement('div')
        countryDiv.classList = 'country-details'
        countryDiv.innerHTML = `
            <h2>Name: ${country.name.common}</h2>
            <p>Capital: ${country.capital ? country.capital[0]: 'No capital'} </p>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>

            `
        countriesContainer.appendChild(countryDiv)
    });

}


const loadCountryDetails = async (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    const res = await fetch(url)
    const data = await res.json()
    displayConuntryDetails(data[0])

}

const displayConuntryDetails = details =>{
    console.log(details.timezones[0])
    
    const displayDetailsContainer = document.getElementById('display-details')
    displayDetailsContainer.innerHTML = `
        <h3>Name: ${details.name.common}</h3>
        <p>Capital: ${details.capital ? details.capital[0] : 'No capital' }</p>
        <p>Region: ${details.region}</p>
        <p>TimeZone: ${details.timezones[0]}</p>
        <img src="${details.flags.png}" >

        `
}



loadCountries()