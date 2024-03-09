let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
        writer: true,
        favoriteHobbies: ["travelling", "Coding"],
        books: ["programming er bolod to bos", "programming er coddogosti"],
        moreDetails: {
            favoriteBasketballTeam: "XYZ",
            isYoungest: true,
            hometown: {
                city: "ABC",
                state: "VW",
            },
            countriesLivedIn: ["Bangladesh", "New York"]
        }
    }
}
const getBook = instructor.additionalData.books[1]
console.log(getBook)
const getState = instructor.additionalData.moreDetails.hometown.state
console.log(getState)
const getCountry = instructor.additionalData.moreDetails.countriesLivedIn[0]
console.log(getCountry)
