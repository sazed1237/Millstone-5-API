function userData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
    const ul = document.getElementById('users-list')
    for(const user of data){
        let singleUser = user.name
        console.log(singleUser)

        const li = document.createElement('li');
        li.innerText = singleUser
        ul.appendChild(li)
    }

}


function usersEmail(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userEmail(data))
}

function userEmail(users){
    const ul = document.getElementById('users-email-list')
    for(const user of users){
        const emails = user.email
        console.log(emails)

        const li = document.createElement('li')
        li.innerHTML = `
        email section
            ${emails}
        ` 
        ul.appendChild(li)
    }
}