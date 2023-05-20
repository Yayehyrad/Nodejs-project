const express = require('express')

const app = express()


app.get('/'  , (req , res)=>{
    res.status(200).end("<hl>Weather</h1>") 
})
app.get('/about'  , (req , res)=>{
    res.status(200).end("lallw") 
})
app.get('/help'  , (req , res)=>{
    res.status(200).end("lallw") 
})
app.get('/weather'  , (req , res)=>{
    if(!req.query.address){
       return res.status(400).send("no data provided")
    }

    res.status(200).send({
        location:"location",
        forecast : "fl"

    }) 
})

app.listen(3000 , ()=>{
    console.log("newsleter")
})