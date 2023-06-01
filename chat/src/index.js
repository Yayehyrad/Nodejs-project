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
    socket.broadcast.emit('welcome' , 'new user ')
    socket.on('data' , (data)=>{
        console.log(data)
        io.emit('data' , data)
    })
    socket.on('location' , ({longitude , latitude})=>{
        io.emit('welcome' , `https://google.com/maps?q=${latitude},${longitude}`)
    })
    socket.on('disconnect' , ()=>{
        io.emit('welcome' , "ures dicon" )
    })
})

server.listen(3000 , ()=>{
    console.log("running at 300")
})