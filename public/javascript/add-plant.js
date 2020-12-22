async function newPlantHandler(event) {
    event.preventDefault()
  
    const user_id = ''
    const plant_id = document.querySelector('input[name="room-id]').value
  
    const response = await fetch(`/api/plants`, {
        method: 'POST',
        body: JSON.stringify({
            user_id,
            plant_id
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