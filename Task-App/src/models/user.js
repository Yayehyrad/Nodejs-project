const mongoose = require("mongoose")
const vaidator = require('validator') 

const User = mongoose.model('User' , 
{
    name : {
        type:String,
        required:true,
        trim:true  
    },
    email : {
        type:String,
        required:true ,
        trim:true,
        lowercase:true,
        Validate(value){
            if (!vaidator.isEmail(value)){
                throw new Error("nt email")
            }
        }
    },
    age : {
        type:Number
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlenght:6
    }
}
)

module.exports = User