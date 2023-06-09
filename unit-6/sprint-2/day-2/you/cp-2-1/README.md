# node_Validation_Middleware.

### Maximum Marks - 15

```
✅ able to submit the application - 1 mark (minimum score)
✅ should able to check request body - 1 mark
✅ should able to check invalid request body - 1 mark
✅ should able to check request body ID type is number - 1 mark
✅ should able to check request body ID type is not number - 1 mark
✅ should able to check request body Name type is string - 1 mark
✅ should able to check request body name not contain any number - 1 mark
✅ should able to check request body Description type is string - 1 mark
✅ should able to check request body Description type is not a string - 1 mark
✅ should able to check request body Rating type is number - 1 mark
✅ should able to check request body Rating type is not a number - 1 mark
✅ should able to check request body Genre type is string - 1 mark
✅ should able to check request body Genre type is not a string - 1 mark
✅ should able to check request body Cast type is an array of strings - 1 mark
✅ should able to check request body Cast type contains non-string value - 1 mark
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

## Description

Create a TODO API server in express in the index.js file and export it.

- The todo server will have only 1 route "/".

- `Create method POST.`

- this route will accept an object with bellow mentioned keys and accept only mentioned type of values.

- `key names are case sensitive make sure you put it right.`
```
  {
  ID: number
  Name: string
  Rating: number
  Description: string
  Genre: string
  Cast: string[]
  }
```
- create a custom validation middleware for express.
- the middleware should check for data validation before the request reaches to route.

### Test Cases

- when the body object is in the correct format and with the proper data type only then the server responds with status code 200 and `data received` message.

- with an invalid request body the response should be `invalid request body.`

- if ID type is a number then add a text in the new line `res.txt` that `ID is a number` (`make sure it is always in a new line`) 
    

- if Name type is a string and not contain any number then add text in the new line `res.txt` that `Name is a string` (`make sure it is always in a new line`) 

- if Description type is a string then add a text in the new line `res.txt` that `Description is a string` (`make sure it is always in a new line`)  

- if Rating type is a number then add a text in the new line `res.txt` that `Rating is a number` (`make sure it is always in a new line`) 

- if Genre type is a string then add a text in the new line `res.txt` that `Genre is a string` (`make sure it is always in a new line`) 

- if Cast type is a Array of strings and not contain any non string then add text in the new line `res.txt` that `Cast is a array of string` (`make sure it is always in a new line`) 

- otherwise at any stage if the upper conditions fail it responds with status code 400 and `bad request.some data is incorrect.` message.add a text in the new line `res.txt` that `bad request.some data is incorrect.` (`make sure it is always in a new line`)

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
