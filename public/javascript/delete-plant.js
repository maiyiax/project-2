async function deletePlantHandler(event) {
    event.preventDefault()
  
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
}
  
document.querySelector('#deletePlant').addEventListener('click', deletePlantHandler)