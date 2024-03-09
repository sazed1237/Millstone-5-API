function userData(){
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
    .then(res => res.json())
    .then(json => displayUsers(json))
}

function displayUsers(data){
    console.log(data)
}