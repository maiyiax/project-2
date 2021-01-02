async function deletePlantHandler(event) {
    event.preventDefault()
  
<<<<<<< HEAD
    // const id = 
    // console.log('button clicked')
    
    // const response = await fetch(`/api/userplants/${id}`, {
    //     method: 'DELETE'
    // })
  
    // if (response.ok) {
    //     document.location.replace('/dashboard')
    // } else {
    //     alert(response.statusText);
    // }
=======
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]
    
    const response = await fetch(`/api/userplants/${id}`, {
        method: 'DELETE'
    })
  
    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText);
    }
}

async function deletePlantDashboard(plant) {
    const id = plant

    const response = await fetch(`/api/userplants/${id}`, {
        method: 'DELETE'
    })
  
    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert(response.statusText);
    }
>>>>>>> develop
}
  
document.querySelector('#deletePlant').addEventListener('click', deletePlantHandler)