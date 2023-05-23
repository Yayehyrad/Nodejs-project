const userres = {
    get : {
        tags:['user'],
        description:"list of all users",
        responses:{
            200 : {
                description:"ok",
                content:{
                    "appication/json":{
                        schema:{
                            type:"object",
                            example:{
                                name:"abell",
                                email:"email@g.com",
                                age:"12"
                            }
                        }
                    }
                }
            },
            '400':{
            description: "Invalid ID supplied"},
            '404':{  description: "user not found"},
          
            '405':{description: "Validation exception"}
            
        }
    },
    post:{
        tags:['user'],
        description:"Create a user users",  
        requestBody:{
            content:{
                "appication/json":{
                    schema:{
                        type:"object",
                        required: {  },
                        properties:{
                            name : {
                                 type:"string",
                                 required:true,
                                 description:"Name f the user",
                                 example:"abel"
                            },
                            age:{
                                type:"number",
                                description:"age of the user",
                                example:12
                            },
                            email : {
                                type:"string",
                                required:true,
                                description:"email of the user",
                                example:"abe@g.com"
                           },
                           password : {
                            type:"string",
                            required:true,
                            description:"Passwrd of the user",
                            example:"abel123r"
                       }
                        }
                    },
                    
            }
        }
    } , 
    responses:{
        201 : {
            description:"ok",
            content:{
                "appication/json":{
                    schema:{
                        type:"object",
                        example:{
                            name:"abell",
                            email:"email@g.com",
                            age:"12",
                            password:"asdaDS" 
                        }
                    }
                }
            }
        },
        '400':{
        description: "Invalid ID supplied"},
        '404':{  description: "user not found"},
      
        '405':{description: "Validation exception"}
        
    }
}
}
const useridres={
    get : {
        tags:['user'],
        description:"get users by id ",
        summary:"get users by id ",
        parameters:[
            {
          name: "id" ,
          in: "params" ,
          description: "id of the user" , 
          required: true,
          type : "objectID",
          example: "646a126c838677cecb451b31"
            }
        ],
        responses:{
            200 : {
                description:"ok",
                content:{
                    "appication/json":{
                        schema:{
                            type:"object",
                            example:{
                                name:"abell",
                                email:"email@g.com",
                                age:"12"
                            }
                        }
                    }
                }
            },
            '400':{
            description: "Invalid ID supplied"},
            '404':{  description: "user not found"},
          
            '405':{description: "Validation exception"}
            
        }
    },
}
const user = {"/users" : userres ,"/user/:id" : useridres   
}

module.exports = user