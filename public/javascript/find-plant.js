const resultsEl = document.getElementById('#results')

// store plants database in array to be filtered
let plants = []
// array to store search criteria
let criteria = []

// calls database when page is loaded to store plant information in array
const getPlants = () => {
    fetch(`/api/plants`)
    .then((response) => {
        if (response.ok) {
            response.json().then((data) => {
                console.log(data)
                plants.push(data)
            })
        } 
    })
    .catch(err => {
        console.log(err)
    })
}

// capture filter criteria
// work in progress
function plantFilterHandler(event) {
    event.preventDefault()

    search = document.getElementById('#plant-filters').value
    criteria.push(search)
}

// filter results of search
// work in progress
function filterPlantsHandler(event) {
    event.preventDefault()

    let filtered = plants[0].filter(plant => criteria.test(plant))

    displayPlants(filtered)
}

// display results of search
// work in progress
const displayPlants = (filtered) => {
    resultsEl.innerHTML = filtered
}

// call getPlants to store data
getPlants()
  
document.querySelector('.plant-filter').addEventListener('click', plantFilterHandler)
document.querySelector('.search-plant').addEventListener('click', filterPlantsHandler)