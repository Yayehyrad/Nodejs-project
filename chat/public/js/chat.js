const socket = io()

const input = document.getElementById('input')
const btn = document.getElementById('btn')
const sbtn = document.getElementById('send-loc')

document.getElementById('message').addEventListener('submit' , (e)=>{
    e.preventDefault()
    btn.setAttribute('disabled' , 'disabled')
    socket.emit('data' , input.value , (e)=>{
        btn.removeAttribute('disabled')
        input.value = ''
        input.focus()
        if (e) {
           return   console.log('message re' , e) 
        }
        console.log('delvered')

    })
})
document.getElementById('send-loc').addEventListener('click' , ()=>{
    
    if(!navigator.geolocation){
        return alert('not supported')
    }
    sbtn.setAttribute('disabled' , 'disabled')
    navigator.geolocation.getCurrentPosition((position)=>{
        const{latitude , longitude} = position.coords
        socket.emit('location' , {latitude , longitude} , ()=>{
            sbtn.removeAttribute('disabled')
             console.log('locatino shared ')

        } )
    })

})
socket.on('welcome' , (text)=>{
        console.log(text)
})

socket.on('data' , (data)=>{
    console.log(data)
})
