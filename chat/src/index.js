const express = require('express')
const http = require('http')
const path = require('path')
const socketio = require('socket.io')
const filter = require('bad-words')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const publicDPath = path.join(__dirname , '../public')

app.use(express.static(publicDPath))
io.on('connection' , (socket)=>{
    console.log("cient cn")
    socket.emit("welcome" , "Welcome back")
    socket.broadcast.emit('welcome' , 'new user ')
    socket.on('data' , (data , callback)=>{

        const f = new filter()
        if(f.isProfane(data)){
            return callback('not allowed')
        }
        io.emit('data' , data)
        callback()
    })
    socket.on('location' , ({longitude , latitude} , callback)=>{
        io.emit('welcome' , `https://google.com/maps?q=${latitude},${longitude}`)
        callback()
    })
    socket.on('disconnect' , ()=>{
        io.emit('welcome' , "ures dicon" )
    })
})

server.listen(3000 , ()=>{
    console.log("running at 300")
})