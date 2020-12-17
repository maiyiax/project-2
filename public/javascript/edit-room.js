// change rooms light light_level
async function editRoomHandler(event) {
    event.preventDefault()
  
    const light_level = document.querySelector('input[name="light-level"]').value.trim()
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ]

    const response = await fetch(`/api/rooms/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            light_level
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
  
document.querySelector('.edit-room-form').addEventListener('submit', editRoomHandler)