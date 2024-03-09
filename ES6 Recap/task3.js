let students = {
    2222: {

        name: "Jack",
        section: "C",
        class: "IX",
        address: {

            "building no": 12,
            "street": "St. Jonson",
            "city": "Petersburg",
            "country": "UK"
        }

    },
    3333: {

        name: "Herry",
        section: "D",
        class: "X",
        address: {


            "building no": 85,
            "street": "DC road",
            "city": "Kachukhet",
            "country": "Bangladesh"
        }

    }
}

const getCity = students[2222].address.city
console.log(getCity)

const getName = students[3333].name
console.log(getName)