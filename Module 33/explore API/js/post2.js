function allPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => postData(data))
}


function postData(posts) {
    const postContainer = document.getElementById('post-container')
    for (const post of posts) {
        console.log(post)

        const postDive2 = document.createElement('div');
        postDive2.innerHTML = `
            <h3>id: ${post.id} </h3>
            <h2>Title: ${post.title} </h2>
            <h5>userId: ${post.userId} </h5>
            <p>Description: ${post.body} </p>
        `
        postContainer.appendChild(postDive2)
    }
}



allPost()

