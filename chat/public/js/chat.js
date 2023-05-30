const socket = io()

const input = document.getElementById('input')
const btn = document.getElementById('btn')

document.getElementById('message').addEventListener('submit' , (e)=>{
    e.preventDefault()
    socket.emit('data' , input.value)
})
socket.on('welcome' , (text)=>{
        console.log(text)
})

socket.on('data' , (data)=>{
    console.log(data)
})