 const express = require('express')
 const swaggerDoc = require('swagger-ui-express')
 require('./db/mongoose')
 
 const swaggerDoccs = require("./helper/documentation")
 const userRouter = require('./routers/user')
 const taskRouter = require('./routers/task')

 const app = express()


 const port = process.env.port || 3000
 app.use(
   express.urlencoded({ extended: true })
);

app.use(express.json())

app.use("/documentatins" , swaggerDoc.serve)
app.use("/documentatins" , swaggerDoc.setup(swaggerDoccs))


app.use(userRouter)
app.use(taskRouter)



 app.listen(port , ()=>{
    console.log("running at 300")
 })

 