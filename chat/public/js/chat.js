const socket = io()

const input = document.getElementById('input')
const btn = document.getElementById('btn')

document.getElementById('message').addEventListener('submit' , (e)=>{
    e.preventDefault()
    socket.emit('data' , input.value)
})
document.getElementById('send-loc').addEventListener('click' , ()=>{
    if(!navigator.geolocation){
        return alert('not supported')
    }
    navigator.geolocation.getCurrentPosition((position)=>{
        const{latitude , longitude} = position.coords
        socket.emit('location' , {latitude , longitude})
    })
})
socket.on('welcome' , (text)=>{
        console.log(text)
})

socket.on('data' , (data)=>{
    console.log(data)
})
