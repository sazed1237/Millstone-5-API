
const loadPhone = async (getSearchText, dataLimit) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${getSearchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayPhones(data.data, dataLimit)
}


const displayPhones = (phones, dataLimit) =>{
    const phoneContainer = document.getElementById('phone-container')
    
    // previous items clear when search new 
    phoneContainer.innerText = '';
    
    const showAllBtn = document.getElementById('show-all')
        if(dataLimit && phones.length > 10){
            // limited items showing
            phones = phones.slice(0, 10)
            showAllBtn.classList.remove('d-none')
        }
        else{
            showAllBtn.classList.add('d-none')
        }


        // not found js
        const phoneNotFound = document.getElementById('no-phone')
        if(phones.length === 0){
            // console.log('phone not found')
            phoneNotFound.classList.remove('d-none')
        }
        else {
            phoneNotFound.classList.add('d-none')
        }


    phones.forEach(phone => {
        // console.log(phone) 
        const phoneDive = document.createElement('div')
        phoneDive.classList.add('col')
        phoneDive.innerHTML = `
        
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.brand}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetails">Show Details</button>
                    
                </div>
            </div>
        `

        phoneContainer.appendChild(phoneDive)
    });
    // stop loader
    toggaleLoader(false)

}

// functions of search or show all button
const processSearch = (dataLimit) =>{
    // start loader
    toggaleLoader(true)
    const searchText = document.getElementById('search-text')
    const searchValue = searchText.value;
    // console.log(searchValue, dataLimit)
    loadPhone(searchValue, dataLimit)
    
    // searchText.value = '';


}


// handle search button
document.getElementById('btn-search').addEventListener('click', function(){
    processSearch(10)
    
})

// search input field ENTER Handler
document.getElementById('search-text').addEventListener('keypress', function(e){
//    console.log(e.key)
    if(e.key === 'Enter'){
        processSearch(10)
    }
})


// loader or spinner handling 
const toggaleLoader = isLoading =>{
    const loaderSection = document.getElementById('loader')
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}



// handle show all button
// not the best way to lead show all
document.getElementById('show-all-btn').addEventListener('click', function(){
    processSearch();
    console.log(processSearch())
})


// handle show details button
const loadPhoneDetails = async (id) =>{
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url)
    const data = await res.json()
    displayPhoneDetails(data.data)
}


// Display phone details 
const displayPhoneDetails = details =>{
    document.getElementById('phoneDetailsLabel').innerText = details.name
    console.log(details)

    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
    <img src="${details.image}" alt="">
    <h4 class="mt-4"><span class="modal-body-sp">Brand: </span>${details.brand}</h4>
    <h5>Main Features:</h5>
    <p><span class="modal-body-sp">DisplaySize: </span>${details.mainFeatures.displaySize}</p>
    <p><span class="modal-body-sp">ChipSet: </span>${details.mainFeatures.chipSet}</p>
    <p><span class="modal-body-sp">Memory: </span>${details.mainFeatures.memory}</p>
    <h4>Sensor: </h4>
    <p>${details.mainFeatures.sensors}</p>
    <p><span class="modal-body-sp">Storage: </span>${details.mainFeatures.storage}</p>
    <h4>Others:</h4>
    <p><span class="modal-body-sp">Bluetooth: </span>${details.others.Bluetooth}</p>
    <p><span class="modal-body-sp">GPS: </span>${details.others.GPS}</p>
    <p><span class="modal-body-sp">NFC: </span>${details.others.NFC}</p>
    <p><span class="modal-body-sp">Radio: </span>${details.others.Radio}</p>
    <p><span class="modal-body-sp">USB: </span>${details.others.USB}</p>
    <p><span class="modal-body-sp">WLAN: </span>${details.others.WLAN}</p>
    <p><span class="modal-body-sp">ReleaseDate: </span>${details.releaseDate}</p>
    <p><span class="modal-body-sp">slug: </span>${details.slug}</p>

    `


}


loadPhone('apple')