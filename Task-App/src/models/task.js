const mongoose = require("mongoose")
const Task  = mongoose.model('Task' , 
{
    desc : {
        type:String,
        
       
    },
    completed : {
        type:Boolean,
        
    }
}
)

module.exports = Task