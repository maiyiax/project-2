// store plants database in array to be filtered
let plants = []

// calls database when page is loaded to store plant information in array
async function getPlants() {
    const response = await fetch(`/api/plants`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })

    if (response.ok) {
        console.log(response)
        plants.push(response)
    } else {
        alert(response.statusText)
    }
}

// filter results based on search criteria
// broken function / work in progress
function plantFilterHandler(event) {
    event.preventDefault()

    let criteria = []

    let filtered = plants.filter(plant => criteria(plant))

    document.getElementById('result').innerHTML = filtered;
}

// call getPlants to store data
getPlants()
  
document.querySelector('.plant-filter').addEventListener('click', plantFilterHandler)