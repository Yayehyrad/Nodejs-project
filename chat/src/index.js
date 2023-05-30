const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDPath = path.join(__dirname , '../public')

app.use(express.static(publicDPath))
io.on('connection' , (socket)=>{
    console.log("cient cn")
    socket.emit("welcome" , "Welcome back")
    socket.on('data' , (data)=>{
        console.log(data)
        io.emit('data' , data)
    })
})

server.listen(3000 , ()=>{
    console.log("running at 300")
})