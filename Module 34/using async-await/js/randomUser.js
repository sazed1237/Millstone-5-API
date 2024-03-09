
const loadRandomUser = async() =>{
    const url = 'https://randomuser.me/api/'
    const res = await fetch(url)
    const data = await res.json()
    displayUser(data.results[0])
}



const displayUser = (user) =>{
    console.log(user.location)
    const userContainer = document.getElementById('user-container')
    const userDiv = document.createElement('div')
    userDiv.classList = 'random-user'
    userDiv.innerHTML = `
        <img src="${user.picture.large}" alt="">
        <h2> ${user.name.title + ' ' + user.name.first + ' ' + user.name.last}</h2>
        <h4> <span class="user-Details">Gender: </span>${user.gender}</h4>
        <span class="user-Details">Email: <a href=""> ${user.email} </a></span>
        <span class="user-Details">Phone:  <a href=""> ${user.phone}</a></span>
        
        <p class="user-Details">Location:</p>
        <p><span class="user-Details">City: </span>${user.location.city}</p>
        <p><span class="user-Details">State: </span>${user.location.state}</p>
        <p><span class="user-Details">Country: </span>${user.location.country}</p>

    `

    userContainer.appendChild(userDiv)
}

loadRandomUser()