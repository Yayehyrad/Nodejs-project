const mongoose = require("mongoose")

const Url = ""

mongoose.connect(Url , {useNewUrlParser : true})

const User = mongoose.model('User' , 
{
    name : {
        type:String
    },
    age : {
        type:Number
    }
}
)
const Task  = mongoose.model('Task' , 
{
    desc : {
        type:String
    },
    completed : {
        type:Boolean
    }
}
)
// const me = new User({
//     name:"Lale",
//     age : 12
// })
// me.save().then(data => console.log(data)).catch(error=>{
//      console.log(error)
// })
// const task1 = new Task({
//     desc:"new task"
//     ,
//     completed: true
// })

// task1.save().then(data=>{
//     console.log(data)
// }).catch(error =>{
//     console.log(error)
// })
