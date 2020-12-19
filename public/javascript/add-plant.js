async function newPlantHandler(event) {
    event.preventDefault()
  
    const plant_name = document.querySelector('input[name="plant-name"]').value
    const room_id = document.querySelector('input[name="room-id]').value
  
    const response = await fetch(`/api/plants`, {
        method: 'POST',
        body: JSON.stringify({
            plant_name,
            room_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
  
    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText)
    }
}
  
document.querySelector('.new-plant-form').addEventListener('submit', newPlantHandler)