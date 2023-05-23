const { json } = require("express");
const User = require('../routers/user.docs')
const swaggerDoccs = {
    
    openapi: "3.0.0",
    info : {
        title : "Demo",
        version:"0.0.1",
        description : "This is a sample task management Server based on the OpenAPI 3.0 specification."

    },
    servers:[
        {
            url: "http://localhost:3000",
            description:"Local dev"
        },
        {
            url: "http://prductino:3000",
            description:"Production"
        },
    ],
    tags:[{
        name : "user",
        description : "user routes"
       
    }],
    paths: User
    
}

module.exports = swaggerDoccs;