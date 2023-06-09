# Morgan Logger Middleware

### Maximum Marks - 5

```
✅ able to submit the application - 1 mark (minimum score)
✅ able to setup express server - 2 mark
✅ should log request to the access.log file for GET request- 0.5 mark
✅ should log request to the access.log file for POST request - 0.5 mark
✅ should log request to the access.log file for DELETE request - 0.5 mark
✅ should log request to the access.log file for PUT request - 0.5 mark

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

- Create a express server in the index.js file and export it.
- `It will accept 4 different methods, GET, POST, PUT, DELETE.`
- The server will have 5 routes.

```
GET - /
GET - /get-users
POST- /add-user
PUT - /user/:id
DELETE - /user/:id
```

- use [morgan][https://expressjs.com/en/resources/middleware/morgan.html] middleware to store logs of http requests

- use `fs` module to append logs to `access.log` into src directory
- you have to log following things

```
Method,
Status,
Content-Length,
Time-Taken,
Date,
HTTP Version,
URL accessed,
New Line at the end

output should look like -
-  GET 200 43 3.307 ms Fri, 10 Mar 2023 04:06:43 GMT 1.1 /get-users
```

##### GET

- /
  - response `{ message: "welcome to server }"`
  - should return's response with status code "200"
- /get-users
  - should return's response with status code "200".
  - response should look like

```
{
"message": "here is the list of all users"
}
```

##### POST

- should return's response with status code "201"
- response should look like

```
{
"message": "user added successfully"
}
```

##### PUT

- should return's response with status code "201"
- response should look like

```
{
"message": user ${id you want to delete} updated successfylly`
}
```

##### DELETE

- response should look like

```
{
"message": `user ${id you want to delete} deleted successfylly`
}
```

## Evaluation Criteria

- able to setup express server
- able to use morgan middleware for logging requests

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
