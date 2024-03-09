const loadRandomUsers = () => {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUsers(data))
}


const displayUsers = user => {
    const imgContainer = document.getElementById('img-container')
    const imgTag = document.createElement('image')
    imgTag.classList = 'imgclass'
    imgTag.innerHTML = `
        <img id="image" src="${user.results[0].picture.large}" alt="">
    `  
    imgContainer.appendChild(imgTag)  
    // console.log(user.results[0].picture.thumbnail)




    const nameTag = document.getElementById('name')
    nameTag.innerHTML = user.results[0].name.title + ' ' + user.results[0].name.first + ' ' + user.results[0].name.last
    // console.log(user.results[0].name.first)


    document.getElementById('email').innerHTML = user.results[0].email
    document.getElementById('phone').innerHTML = user.results[0].phone

    document.getElementById('gander').innerHTML =  user.results[0].gender
    // console.log(user.results[0].gender)




    const addressContainer = document.getElementById('address-container')
    const address = document.createElement('div')
    address.classList = 'address'
    address.innerHTML =   `
        <p>Street: ${user.results[0].location.street.name}</p>
        <p>City: ${user.results[0].location.city}</p>
        <p>Country: ${user.results[0].location.country}</p>
    
    `
    addressContainer.appendChild(address)
    // console.log(user.results[0].location)


    console.log(user.results[0].email)

}


loadRandomUsers()