const loadMeals = (getSearchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getSearchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displaymeals(data.meals))
}

const displaymeals = meals => {
    const mealsContainer = document.getElementById('meals-container')
    
    mealsContainer.innerText = '';

    meals.forEach(meal => {
        console.log(meal)

        const melaDiv = document.createElement('div')
        melaDiv.classList.add = 'col'
        melaDiv.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>

                <!-- Button trigger modal -->
                <button onclick="loadMealDetails2(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
                    Details
                </button>
            </div>
        `
        
        mealsContainer.appendChild(melaDiv)
    });
}



const searchMeals = search => {
    const searchText = document.getElementById('search-text')
    const searchValue = searchText.value 
    // console.log(searchValue)

    loadMeals(searchValue)

    searchText.value = '';
}

// normal fetch 

// const loadMealDetails = idMeal =>{
//     const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
//     fetch(url)
//     .then(res => res.json())
//     .then(data => displayMealDetails(data.meals[0]))
//     .catch(error => console.log(error))
// }



// using   async 
const loadMealDetails2 = async(idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try{
        const res = await fetch(url)
        const data = await res.json()
        displayMealDetails(data.meals[0])
    }
    catch(error){
        console.log(error)
    }
}



const displayMealDetails = details =>{
    document.getElementById('mealDetailsModal').innerText = details.strMeal
    // console.log(details)

    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
        <img src="${details.strMealThumb}" class="card-img-top mb-3" alt="...">
        <p>Meal id: ${details.idMeal} </p>
        <p>Location: ${details.strArea} </p>
        <p>Category: ${details.strCategory ? details.strCategory : 'No Category'} </p>
        <p>Tag: ${details.strTags ? details.strTags : 'No Tags'} </p>
    `
}


loadMeals('')