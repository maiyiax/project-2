// store plants database in array to be filtered
let plants = []

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
