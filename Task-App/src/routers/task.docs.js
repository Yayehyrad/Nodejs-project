const alltasks = {
    get : {
        tags:['task'],
        description:"list of all tasks",
        security  : [
            {
                BearerAuth: [],
              },
        ],
        responses:{
            200 : {
                description:"ok",
                content:{
                    "appication/json":{
                        schema:{
                            type:"object",
                            example:{
                                desc:"abell",
                                completed: true,
                            }
                        }
                    }
                }
            },          
            '405':{description: "Validation exception"}
            
        }
    },
}
const Ctasks = {
    get : {
        tags:['task'],
        description:"list of incompleted tasks",
        security  : [
            {
                BearerAuth: [],
              },
        ],
        responses:{
            200 : {
                description:"ok",
                content:{
                    "appication/json":{
                        schema:{
                            type:"object",
                            example:{
                                desc:"abell",
                                completed: false,
                            }
                        }
                    }
                }
            },          
            '405':{description: "Validation exception"}
            
        }
    },
}
const deleteTask = {
    
        delete: {
          tags: ["task"],
          summary: "Delete a task",
          security: [
            {
              BearerAuth: [],
            },
          ],
          parameters: [
            {
              in: "path",
              name: "id",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID of the task to delete",
            },
          ],
          responses: {
            "200": {
              description: "Successful operation",
              content: {
                "application/json": {
                  schema: {
                    // Define the response schema for successful deletion
                  },
                },
              },
            },
            "404": {
              description: "Task not found",
              content: {
                "application/json": {
                  schema: {
                    // Define the response schema for task not found
                  },
                },
              },
            },
            "500": {
              description: "Internal server error",
              content: {
                "application/json": {
                  schema: {
                    // Define the response schema for internal server error
                  },
                },
              },
            },
          },
        },
        patch: {
            tags: ["task"],
            summary: "Update a task",
            parameters: [
              {
                in: "path",
                name: "id",
                required: true,
                schema: {
                  type: "string",
                },
                description: "ID of the task to update",
              },
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    type:"object",
                    example:{
                        dec:"go to Gym at 12:00",
                        completed:"true"
                    }
                  },
                },
              },
            },
            security: [
              {
                BearerAuth: [],
              },
            ],
            responses: {
              "200": {
                description: "Successful operation",
                content: {
                  "application/json": {
                    schema: {
                      // Define the response schema for successful update
                    },
                  },
                },
              },
              "400": {
                description: "Bad request",
                content: {
                  "application/json": {
                    schema: {
                      // Define the response schema for bad request
                    },
                  },
                },
              },
              "404": {
                description: "Task not found",
                content: {
                  "application/json": {
                    schema: {
                      // Define the response schema for task not found
                    },
                  },
                },
              },
              "500": {
                description: "Internal server error",
                content: {
                  "application/json": {
                    schema: {
                      // Define the response schema for internal server error
                    },
                  },
                },
              },
            },
          },
        get: {
            tags: ["task"],
            summary: "Get a task by id",
            security: [
                {
                  BearerAuth: [],
                },
              ],
            parameters: [
              {
                in: "path",
                name: "id",
                required: true,
                schema: {
                  type: "string",
                },
                description: "ID of the task to retrieve",
              },
            ],
       
            responses: {
              "200": {
                description: "Successful operation",
                content: {
                  "application/json": {
                    schema: {
                        type:"object",
                        example:{
                            dec:"go to Gym at 12:00",
                            completed:"true"
                        }
                    },
                  },
                },
              },
              "404": {
                description: "Task not found",
                content: {
                  "application/json": {
                    schema: {
                      // Define the response schema for task not found
                    },
                  },
                },
              },
              "500": {
                description: "Internal server error",
                content: {
                  "application/json": {
                    schema: {
                      // Define the response schema for internal server error
                    },
                  },
                },
              },
            },
          },
        }
const createTask = {
    post:{
        tags:['task'],
        description:"Create a task", 
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
                  required: ['desc', 'completed'],
                  properties: {
                    desc: {
                      type: 'string',
                      description: 'task description',
                      example: 'home work',
                    },
                    completed: {
                      type: 'boolean',
                      description: 'True/false',
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
                            desc:"home work ",
                            completed:"false",
                             }
                    }
                }
            }
        },
        '405':{description: "Validation exception"}
        
    }
}
}

const task = {"/tasks" : alltasks,
              "/task/notCompleted" : Ctasks,
              "/task" : createTask ,
              "/task/{id}": deleteTask,
              
              
            //   "/task/:id" : useridres , 
            //   "/task" : profie ,  
}

module.exports = task