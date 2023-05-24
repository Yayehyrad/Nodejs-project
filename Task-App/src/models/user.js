const mongoose = require("mongoose")
const vaidator = require('validator') 
const  bcrypt = require('bcryptjs')

const userSchima = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        trim:true  
    },
    email : {
        type:String,
        required:true ,
        unique:true,
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
})

userSchima.static.findByCredentias = async (email , password)=>{
            const user = await User.findOne({
                email : email
            })
            if(!user){
                throw new Error("Unable to login")
            }
            const isMatch = await bcrypt.compare(user.passwrd , password)
            if(!isMatch){
                throw new Error("Wrong password or email")
            }
            return user

}



userSchima.pre("save", async function(next){
            if(this.isModified('password')){
                this.password = await bcrypt.hash(this.password , 8)
            }
            next()
})

const User = mongoose.model('User' , userSchima
)

module.exports = User