
function allPhotos(){
    const url = 'https://jsonplaceholder.typicode.com/photos'
    fetch(url)
    .then(res => res.json())
    .then(data => photoData(data))
}

function photoData(photos){
    const photoContainer = document.getElementById('photos-container')
    for(const photo of photos){
        // console.log(photo)

        const photoDiv = document.createElement('div')
        photoDiv.innerHTML = `
            <h4>albumId: ${photo.albumId} </h4>
            <h3>id: ${photo.id} </h3>
            <img src="${photo.thumbnailUrl}" alt="">
            <h2>Title: ${photo.title} </h2>
            <img src="${photo.url}" alt="">
            
            `

        photoContainer.appendChild(photoDiv);
    }
    

}

allPhotos()