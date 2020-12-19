// move plant to different room
async function editPlantHandler(event) {
    event.preventDefault()
  
    const room_id = document.querySelector('input[name="room-id"]').value.trim()
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ]

    const response = await fetch(`/api/plants/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
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
  
document.querySelector('.edit-plant-form').addEventListener('submit', editPlantHandler)