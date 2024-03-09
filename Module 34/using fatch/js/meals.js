const loadMeals = (getSearchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getSearchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}


const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meals-container')
    mealsContainer.innerText = '';
    meals.forEach(meal => {
    console.log(meal)
    const mealDiv = document.createElement('div')
    mealDiv.classList.add = 'col'
    mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                
                <button onclick="mealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
                    Details
                </button>
            </div>
        </div>
    
    `
    mealsContainer.appendChild(mealDiv)
        
    });
}

const searchMeals = () => {
    const searchText = document.getElementById('search-text').value
    // console.log(searchText)
    loadMeals(searchText)

    searchText.value = '';
}

const mealDetails = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))

    // console.log(idMeal)
}

const displayMealDetails = details => {
    document.getElementById('mealModalLabel').innerText = details.strMeal
    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
    <img src="${details.strMealThumb}" class="card-img-top img-fluid pb-2" alt="...">
    <p class="card-text">Meal ID: ${details.idMeal}</p>
    <p class="card-text">Location: ${details.strArea}</p>
    <p class="card-text">Categor: ${details.strCategory}</p>

    `
    console.log(details)
}


loadMeals('')