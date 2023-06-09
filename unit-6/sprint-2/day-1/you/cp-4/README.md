# node_express_todo_CRUD.

### Maximum Marks - 13

```
✅ able to submit the application - 1 mark (minimum score)
✅ should able to get the initial structure of todos - 2 mark
✅ should able to post todo- 2 mark
✅ should able to update a todo - 2 mark
✅ should able to handle error conditions during update a todo - 2 mark
✅ should able to delete a todo - 2 mark
✅ should able to handle error conditions during delete a todo - 2 mark
✅ Should handle non-existent files and directories - 2 mark
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
- run `npm install --engine-strict` to install the node modules.

// complete functions

// test locally
npm run test
`make sure when you test locally server is not running locally.`

```

## Test Cases

Create a TODO API server in express in the index.js file and export it.

- The todo server will have only 1 route "/".

- `It will accept 4 different methods, GET, POST, PUT, DELETE.`

- use db.json as a database.

```
- make sure the response should be only the todos key, not the whole db.js.

- Responses always should be in JSON format.

- initial structure of db.json should be `{"todos":[]}`

```

##### GET

- should return's response with status code "200" and the current status of the todos.

##### POST
- take an object as a request body 
    - eg. `{"id":1,"task":"learn Node","status": true}` make sure id always be numeric.
- should return's response with status code "200" and the updated status of the todos.

##### PUT
- the endpoint should be `/id`.
- if the id is valid 
    - should return's response with status code "200" and the updated status of the todos.
- otherwise 
    - return a response with status code "400" and `"Invalid argument"`.

##### DELETE

- the endpoint should be `/id`.
- if the id is valid 
    - should return's response with status code "200" and the updated status of the todos.
- otherwise 
    - return a response with status code "400" and `"Invalid argument"`.

## Evaluation Criteria

- Correct implementation of the mathematical operations
- Proper handling of command line arguments
- Proper implementation of random number generation
- Proper handling of edge cases
- Code readability and organization
- Comments explaining the logic behind each step

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
