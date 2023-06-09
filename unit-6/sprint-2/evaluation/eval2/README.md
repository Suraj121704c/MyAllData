# Marvel/DC Super Team

### Maximum Marks - 8 (Rubrics as per the problem statement)
```
✅ able to submit the application - 1 mark (minimum score)
✅ should able to perform the oprations for "/" route - 0.5 mark
✅ should able to post the data and send the appropriate response on hitting at "/marvel/addnew" - 0.5 mark
✅ should able to post the data and send the appropriate response on hitting at "/dc/addnew" - 0.5 mark
✅ should able to do all the things mentioned for "/marvel" route - 0.5 mark
✅ should able to do all the things mentioned for "/dc" route - 0.5 mark
✅ should able to do all the things mentioned for "/marvel/:id" route - 0.5 mark
✅ should able to do all the things mentioned for "/dc/:id" route - 0.5 mark
✅ should able to do all the things mentioned for "/winningteam" route - 0.5 mark
✅ should able to do all the things mentioned for "/marvel/update/:id" route - 0.5 mark
✅ should able to do all the things mentioned for "/dc/update/:id" route - 0.5 mark
✅ should able to do all the things mentioned for "/marvel/delete/:id" route - 0.5 mark
✅ should able to do all the things mentioned for "/dc/delete/:id" route - 0.5 mark
✅ "logger" middleware is working fine - 0.5 mark
✅ "validator" middleware is working fine - 0.5 mark
```
Initialize a backend project using the right command for it and create an express app.

There will be a `db.json` file containing the sample data, which you will be using as a database for performing CRUD operations, Following is the sample structure:

```
{
    "marvel":[
        {
            "id":1,
            "name":"Bruce Banner",
            "alias":"Hulk",
            "power_level":8,
            "role":"member"
        }
    ],

    "dc":[
        {
            "id":1,
            "name":"Barry Allen",
            "alias":"Flash",
            "power_level":7,
            "role":"member"
        }
    ]
}
```
Write Following API Endpoints to perform CRUD Operations:

### /
- This represents the home route of the server.
- If the client is hitting a request at this endpoint, there should be a response as `Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!`.
- This response should be a `h1` heading type.
- You have to take care of this at backend itself.

### /marvel/addnew
- This route is responsible for adding a new superhero in the database under `marvel`, as per the given structure of `db.json`.
- You have to carry out this operation using the `File system` module.
- This should work as a `post` functionality in the database.
- The operation has to be carried out `synchronously`.
- If there is some error while adding into the file you have to send the complete error as the response.
- You can add the character details of your choice
- In case of no error, send following as response:
```
New superhero has been added
```

### /dc/addnew
- This route is responsible for adding a new superhero in the database under `dc`, as per the given structure of `db.json`.
- You have to carry out this operation using the `File system` module.
- This should work as a `post` functionality in the database.
- The operation has to be carried out `synchronously`.
- If there is some error while adding into the file you have to send the complete error as the response.
- You can add the character details of your choice
- In case of no error, send following as response:
```
New superhero has been added
```

### /marvel
- This route is responsible for getting all the data of `marvel` superheroes.
- You have to carry out this operation using the `File system` module.
- This should work as a `get` functionality in the database.
- The operation has to be carried out `synchronously`.
- If there is some error while reading from the file you have to send the complete error as the response.
- In case of no error, send the complete marvel superhero data as response.
- Also there should be way to get the data of any partcular character based on there `alias`.
Hint: You can take help of `query`. you can pass the `alias`as the `query`.
- So, basically if the `alias` is passed as a `query` the we should get that particular charachter details as the response otherwise all the characters details.

### /dc
- This route is responsible for getting all the data of `dc` superheroes.
- You have to carry out this operation using the `File system` module.
- This should work as a `get` functionality in the database.
- The operation has to be carried out `synchronously`.
- If there is some error while reading from the file you have to send the complete error as the response.
- In case of no error, send the complete marvel superhero data as response.
- Also there should be way to get the data of any partcular character based on there `alias`.
Hint: You can take help of `query`. you can pass the `alias`as the `query`.
- So, basically if the `alias` is passed as a `query` the we should get that particular charachter details as the response otherwise all the characters details.

### /marvel/:id
- This route is responsible for getting the data of that partcular `marvel` superhero whose `id` is passed as a `param`.
- You have to carry out this operation using the `File system` module.
- This should work as a `get` functionality in the database.
- The operation has to be carried out `synchronously`.
- If there is some error while reading from the file you have to send the complete error as the response.
- In case of no error, send the details of that partcular superhero whose `id` has been passed as response.

### /dc/:id
- This route is responsible for getting the data of that partcular `dc` superhero whose `id` is passed as a `param`.
- You have to carry out this operation using the `File system` module.
- This should work as a `get` functionality in the database.
- The operation has to be carried out `synchronously`.
- If there is some error while reading from the file you have to send the complete error as the response.
- In case of no error, send the details of that partcular superhero whose `id` has been passed as response.

### /winningteam
- You are supposed to `get` the details of the winning team as a response.
- How to determine the winning team?
```
Add up the power_level of all the characters in marvel and dc, then the team with maximum total power_level is the winning team.
```
- You have to carry out this operation using the `File system` module.
- The operation has to be carried out `synchronously`.

### /marvel/update/:id
- To update the details of a character whose id has been passed as a param. (PATCH)
    - on successful update `Patched Character Details` response should be sent and the data should be updated on `db.json.`
- You can update anything you want as per your will, it's just the logic should be correct

### /dc/update/:id
- To update the details of a character whose id has been passed as a param. (PATCH)
    - on successful update `Patched Character Details` response should be sent and the data should be updated on `db.json.`
- You can update anything you want as per your will, it's just the logic should be correct

### /marvel/delete/:id
- To delete the details of a particular character. (DELETE)
    - on successful delete `Deleted Character Details` response should be sent and `db.json` should be updated accordingly.

### /dc/delete/:id
- To delete the details of a particular character. (DELETE)
    - on successful delete `Deleted Character Details` response should be sent and `db.json` should be updated accordingly.

#### Middlewares

- Write a Middleware called `logger`, it should log the `METHOD, ROUTE, and 'user-agent'` from request headers in a file called `logs.txt`.It should be called in every request.
```
Example of logs.txt file (every line should look the exact same structure otherwise can be the reason for not getting the marks) :
"Method:GET, Route:/, user-agent:PostmanRuntime/7.31.1"
```
- Write a Middleware called `validator`, which should protect `only the PATCH and DELETE` routes.

    - It should check if in the URL Query,` if the role is equal to leader and pass is equal to 4534,` because only a leader can update or delete member details. If yes, it should allow the leader to `modify/delete` the post. If not, send a message `You are not authorised to do this operation`


```
Note: You can check documentation on how you can get two queries from URL.
You are supposed to logically segregate the code. Routes and Middlewares should be in separate folders. Keep your index file clean.
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

## Requirements

- The code should be written in Node.js.
- Use the built-in modules and external modules that are required.
- Add comments throughout your code to explain the logic behind each step

## Evaluation Criteria

- Correct implementation of all the routes
- Proper handling of edge cases
- Code readability and organization
- Comments explaining the logic behind each step

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
- Should clean/delete the `logs.txt` each and every time before testing.
- should keep the `db.json` as it was in initial condition, which means we have to remove the added data and make the `db.json` as it was in initial state before testing.





