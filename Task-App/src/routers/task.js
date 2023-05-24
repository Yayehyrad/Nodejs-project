const express = require('express')

const router = new express.Router()

const Task = require('../models/task') 

router.delete('/task/:id' , async (req,res)=>{
    const _id = req.params.id
    try{
        const task = await Task.findByIdAndDelete(_id)
        if(!task){
            return res.status(404).send("not found")
        }
        res.status(200).send(task)
    }catch(e){
        res.status(500).send(e.message) 
    }
})

router.patch("/task/:id" , async (req , res)=>{
    const _id  = req.params.id
    console.log(_id)
    const update = ['dec' , "completed"]
    const updates = Object.keys(req.body)
    const isVal = updates.every((upd)=>{
            return update.includes(upd)
    })
    if(!isVal){
        return res.status(400).send({error:"cant performe the action"})
    }
    try{
        const task  = await Task.findById(_id)
        updates.forEach((update)=>{
            task[update] = req.body[update]
        })
        await task.save()
        // const task = await Task.findByIdAndUpdate(_id,req.body,{new:true , runValidators:true}) 
        if(!task){
            return res.status(404).send("not found")
        }
        res.status(200).send(task)
    }catch(e){
        res.status(500).send(e.message) 
    }
})

router.post("/task" , async (req , res)=>{
    const task = new Task(req.body)
    try{
        await task.save()
        res.status(201).send(task)
    }catch(e){
        res.status(500).send(e.message)
    } 
})
router.get("/tasks" , async (req , res)=>{
    try{
        const tasks = await Task.find({})
        res.status(201).send(tasks)
    }catch(e){
        res.status(500).send(e.message)
    }
})
router.get("/task/:id" , async (req , res)=>{
    const _id = req.params.id
    try{
        const task =   await Task.findById({
            _id
        })
        if(!task){
            return res.status(404).send("not fund")
        }
        res.status(201).send(task)
    }catch(e){
        res.status(500).send(e.message)
    }
})













module.exports = router