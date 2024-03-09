
const loadMeals = async (getSearchText) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${getSearchText}`
    const res = await fetch(url)
    const data = await res.json()
    displayMeals(data.meals)
}

const displayMeals = meals =>{
    const mealsContainer = document.getElementById('meals-container')
        mealsContainer.innerText ='';
    meals.forEach(meal => {
        console.log(meal.idMeal)
        const mealDive = document.createElement('div')
        mealDive.classList = 'col'
        mealDive.innerHTML = `
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="loadMealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
                        Details
                    </button>
                    
                </div>
              </div>
        `
        mealsContainer.appendChild(mealDive)

    });
}


const searchMeal = search =>{
    // console.log('search button')
    const searchText = document.getElementById('search-text')
    const searchValue = searchText.value
    console.log(searchValue)

    loadMeals(searchValue)
    searchText.value = '';
}


const loadMealDetails = async(idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    const res = await fetch(url)
    const data = await res.json()
    displayMealDetails(data.meals[0])
}


const displayMealDetails = details =>{
    console.log(details.strYoutube)
    document.getElementById('mealModalLabel').innerText = details.strMeal

    const modalBody = document.getElementById('modal-body')
    modalBody.innerHTML = `
    <img src="${details.strMealThumb}" class="card-img-top" alt="...">
    <h3>Meal Id: ${details.idMeal} </h3>
    <p>Area: ${details.strArea} </p>
    <p>Instruction: ${details.strInstructions} </p>
    <span>YouTube: <a href="${details.strYoutube}" target="_blank" >${details.strYoutube}</a></span>
    `
}


loadMeals('')