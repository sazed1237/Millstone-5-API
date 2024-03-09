
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postsData(data))
}


function postsData(posts){
    const postItems = document.getElementById('post-items')
    for(const post of posts){
        console.log(post)
        const postDive = document.createElement('div')
        postDive.classList = ('post')
        postDive.innerHTML = `
        <h3>id: ${post.id} </h3>
        <h2>Title: ${post.title} </h2>
        <h5>userID: ${post.userId} </h5>
        <p>Description:<br>${post.body} </p>
    
        `
        postItems.appendChild(postDive)
    }

}

loadPosts()