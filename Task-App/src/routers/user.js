const express = require('express')
const User = require('../models/user') 
const router = new express.Router()

router.post("/users" , async (req , res)=>{
    const user = new User(req.body)
    try{
        await  user.save()
        res.status(201).send(user)
    }catch(error){
        res.status(500).send(error.message)
    }    
})
router.get('/users' , async (req , res)=>{

    try{
        const users = await User.find({})
        res.status(200).send(users)
    }catch(e){
        res.status(500).send(error.message)
    }
})
router.get('/user/:id' , async (req , res)=>{
    const _id = req.params.id 
    try{
        const user =  await User.findById({
            _id
        })
        if(!user){
            return res.status(404).send("not found")
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e.message)
    }
})
router.patch("/user/:id" , async (req , res)=>{
    const _id  = req.params.id
    const update = ['name' , "age" , 'passwrd']
    const updates = Object.keys(req.body)
    const isVal = updates.every((upd)=>{
            return update.includes(upd)
    })
    if(!isVal){
        return res.status(400).send({error:"cant performe the action"})
    }
    try{
        const user = await User.findByIdAndUpdate(_id,req.body,{new:true , runValidators:true}) 
        if(!user){
            return res.status(404).send("not found")
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e.message) 
    }
})
router.delete('/user/:id' , async (req,res)=>{
    const _id = req.params.id
    try{
        const user = await User.findByIdAndDelete(_id)
        if(!user){
            return res.status(404).send("not found")
        }
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e.message) 
    }
})


module.exports = router