function allComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => commentData(data))
}


function commentData(comments){
    const commentContainer = document.getElementById('comments-container')
    for(const comment of comments){
        console.log(comment)

        const commentDiv = document.createElement('div');
        commentDiv.classList = 'comment'
        commentDiv.innerHTML = `
            <h3>PostId: ${comment.postId} </h3>
            <h2>Name: ${comment.name} </h2>
            <h3>id: ${comment.id} </h3>
            <h5>Email: ${comment.email} </h5>
            <p><span>Comment:</span><br> ${comment.body} </p>
        `

        commentContainer.appendChild(commentDiv)
    }
}

allComments()