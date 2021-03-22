// Dotenv
const dotenv = require('dotenv')
//CORS
var cors = require('cors')
//Axios to call API
const axios = require('axios');
var path = require('path')
const express = require('express')
const app = express()
//Body parser
var bodyParser = require('body-parser')

dotenv.config()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'))



// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//endpoint for calling sentiment API using axios
app.post('/sentimentData', async (req, res) => {
    //Getting url from request
    const url = req.body.data
    
    try{
        const response = await axios(`https://${process.env.API_URL}/sentiment-2.1?key=${process.env.API_KEY}&lang=en&url=${url}`)
        // if(response.status == 200){
            const {model, score_tag, agreement, subjectivity} = response.data
            res.send({model, score_tag, agreement, subjectivity})
        // }
    
    } catch(e){
        console.log(e)
    }


});

module.exports = app
