async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const url = "http://localhost:8081/sentimentData";
    if(Client.checkForName(formText)){
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
            for (const key in data) {
                console.log(`${key}: ${data[key]}`);
                var node = document.createElement("LI");                
                var textnode = document.createTextNode(`${key} : ${data[key]}`);      
                node.appendChild(textnode);                              
                document.getElementById("results").appendChild(node);  
            }
        }catch(e){
            console.log(e)
    }
    }else{
        alert("Invalid URL!!!")

    }

    
}

export { handleSubmit }
