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
        requestBody: {
            required: true,
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  required: ['name', 'email', 'password'],
                  properties: {
                    name: {
                      type: 'string',
                      description: 'Name of the user',
                      example: 'abel',
                    },
                    age: {
                      type: 'number',
                      description: 'Age of the user',
                      example: 12,
                    },
                    email: {
                      type: 'string',
                      description: 'Email of the user',
                      example: 'abe@g.com',
                    },
                    password: {
                      type: 'string',
                      description: 'Password of the user',
                      example: 'abel123r',
                    },
                  },
                },
              },
            }}, 
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
                            password:"asdaDS",
                            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDcwNjM4OTFmOTZjMmE3OTI5Y2RhNWMiLCJpYXQiOjE2ODUwODcxMTR9.wvA4Vpo_VHm2ezkIB2pfy2hVgjLm1YbNJTwnynScLdI" 
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
const userlogin = {
    post: {
        tags: ['user'],
        summary: 'User login',
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: {
                    type: 'string',
                    description: 'User email',
                    example: 'john@example.com',
                  },
                  password: {
                    type: 'string',
                    description: 'User password',
                    example: 'password123',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Successful login',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    user: {
                      type: 'object',
                      description: 'User object',
                      example : {
                        _id : "646f1b83ef5c1f61bef40ed4",
                        name: "test2",
                        email: "test2@gmail.com",
                        age: 12,
                        __v: 5
                      }
                    },
                    token: {
                      type: 'string',
                      description: 'Bearer token',
                      example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Bad request',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    message: {
                      type: 'string',
                      description: 'Error message',
                      example: 'Invalid credentials',
                    },
                  },
                },
              },
            },
          },
        },
      },
    }
const profie = {
    get: {
        tags: ['user'],
        summary: 'Get current user',
        security: [
          {
            BearerAuth: [],
          },
        ],
        responses: {
          '200': {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
              
                },
              },
            },
          },
          '401': {
            description: 'Unauthorized',
            content: {
              'application/json': {
                schema: {
                
                },
              },
            },
          },
          '500': {
            description: 'Internal server error',
            content: {
              'application/json': {
                schema: {
                
                },
              },
            },
          },
        },
      }, 

}

const logout = {
    post: {
        tags: ['user'],
        summary: 'logout ',
        security: [
            {
              BearerAuth: [],
            },
          ],
        responses: {
          '200': {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
              
                },
              },
            },
          },
          '401': {
            description: 'Unauthorized',
            content: {
              'application/json': {
                schema: {
                
                },
              },
            },
          },
          '500': {
            description: 'Internal server error',
            content: {
              'application/json': {
                schema: {
                
                },
              },
            },
          },
        },
      }, 

}
const logoutAll = {
    post: {
        tags: ['user'],
        summary: 'logout',
        security: [
            {
              BearerAuth: [],
            },
          ],
        responses: {
          '200': {
            description: 'Successful operation',
            content: {
              'application/json': {
                schema: {
              
                },
              },
            },
          },
          '401': {
            description: 'Unauthorized',
            content: {
              'application/json': {
                schema: {
                
                },
              },
            },
          },
          '500': {
            description: 'Internal server error',
            content: {
              'application/json': {
                schema: {
                
                },
              },
            },
          },
        },
      }, 

}
const updateUser={
    patch: {
        tags: ['user'],
        summary: 'Update user',
        security: [
            {
              BearerAuth: [],
            },
          ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  name: {
                    type: 'string',
                    description: 'User name',
                    example: 'John Doe',
                  },
                  age: {
                    type: 'number',
                    description: 'User age',
                    example: 30,
                  },
                  email: {
                    type: 'string',
                    description: 'User email',
                    example: 'john@example.com',
                  },
                  password: {
                    type: 'string',
                    description: 'User password',
                    example: 'password123',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'Successful update',
            content: {
              'application/json': {
                schema: {
                },
              },
            },
          },
    
       
      
        },
     
}
}
const deleteUser = {
    delete: {
        tags: ['user'],
        summary: 'Delete user',
        security: [
            {
              BearerAuth: [],
            },
          ],
        responses: {
          '204': {
            description: 'Successful deletion',
          },
          '404': {
            description: 'Not found',
            content: {
              'application/json': {
                schema: {
                  type: 'string',
                  description: 'Error message',
                },
              },
            },
          },
          '500': {
            description: 'Internal server error',
            content: {
              'application/json': {
                schema: {
                  type: 'string',
                  description: 'Error message',
                },
              },
            },
          },
        },
      },
}







const user = {"/users" : userres ,
              "/user/:id" : useridres , 
              "/user/login" : userlogin , 
              "/users/me" : profie ,  
              "/user/logout" : logout , 
              "/user/logoutFromAll" : logoutAll,
              "/user/update" : updateUser,
              "/user/delete" : deleteUser,
}

module.exports = user


 
    
 
 





  
   
    




