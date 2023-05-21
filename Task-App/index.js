const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const Url = "mongodb+srv://root:yayeh6116@cluster0.excpgni.mongodb.net/"
const dataBase = "task_manager"


MongoClient.connect("mongodb+srv://root:yayeh6116@cluster0.excpgni.mongodb.net/" ,{useNewUrlParser : true} , (error , client)=>{
        console.log("lalsd")
        // if (error) {
        //    return console.log(errr.message)
        // }
        // console.log("connect")
})