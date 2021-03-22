async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const url = "http://localhost:8081/sentimentData";
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    try{
        //Calling express backend and sending url
        const fetchAPI = await fetch(url, {
            method: 'POST', 
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin', 
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({data: formText}) 
        });
        
        
        const data = await fetchAPI.json();
        document.getElementById('results').innerHTML = JSON.stringify(data)
    }catch(e){
        console.log(e)
    }
}

export { handleSubmit }
