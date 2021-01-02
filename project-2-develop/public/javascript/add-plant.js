// Adding Plant to Room


// async function newPlantHandler(event) {
//     event.preventDefault()

//     const user_id = ''
//     const plant_id = document.querySelector('input[name="room-id]').value

//     const response = await fetch(`/api/plants`, {
//         method: 'POST',
//         body: JSON.stringify({
//             user_id,
//             plant_id
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })

//     if (response.ok) {
//         document.location.replace('/dashboard')
//     } else {
//         alert(response.statusText)
//     }
// }

// document.querySelector('.new-plant-form').addEventListener('submit', newPlantHandler)

// Add Plant to Userplant (this is what's displayed on user dashboard)

async function addPlantToDashboard(event) {
    event.preventDefault();

    const plant = document.getElementById('select');
    const plant_id = plant.options[plant.selectedIndex].value;

    // post to dashboard
    const response = await fetch(`/api/userplants`, {
        method: 'POST',
        body: JSON.stringify({
            plant_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    console.log(response);

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }

}

document.querySelector('#addPlant').addEventListener('click', addPlantToDashboard);