# People Management System

### Maximum Marks - 10
```
✅ Able to submit the application - 1 mark (minimum score)
✅ should able to perform the operations for "/" route - 1 mark
✅ should able to write the initial count of Male & Female along with the time stamp in the logs.txt file on hitting "/gencount" route - 1 mark
✅ should able to send appropriate response in "/gencount" route- 1 mark
✅ should able to update the new person in "data.json" file on hitting "/addnew" route - 1 mark
✅ should able to put all the people in "people.txt" file in required format on hitting "/people" - 1 mark
✅ should able to appropriate response on hitting at "/people" - 1 mark
✅ should able to get IP address and family on hitting "/address" route - 1 mark
✅ should able to append it in "logs.txt" on hitting "/address" route  - 1 mark
✅ should able to get the desired response upon hitting "/yoda" route- 1 mark
```

Initialize a backend project using the right command for it and create an HTTP server for the people management system with the following API endpoints:

### /
- This represents the home route of the server.
- If the client is hitting a request at this endpoint, there should be a response as `Welcome to the Home Page`.
- This response should be an `h1` heading type.
- You have to take care of this at the backend itself.

### /gencount
- This route is responsible for counting the initial number of `Male` & `Female` users in `data.json`.
- Once the client hits this API endpoint, there should be a `logs.txt` file in which you have to write the count of `Male` & `Female` along with the time stamp, refer the following:

```
The initial Male count is 12 and Female count is 13 at Thu Mar 02 2023 19:03:30 GMT+0530 (India Standard Time)
```
- If there is some error in writing into the file you have to send it as a response
```
Send the complete error as a response
```
- In case of no error, send the following as a response:
```
The count has been updated in the logs file
```
- This writing operation has to be carried out `asynchronously`.

### /addnew
- Once the client has made a request at this endpoint, then you are supposed to update the `data.json` file.
- Create a new user with the following fields:
```
id => Any random number using the inbuilt crypto module
first_name => get the username using the os inbuilt module of node
last_name => get the username using the os inbuilt module of node
email => You can put any email of your choice over here
gender => You can put Male/Female as per your choice

Note: In both first_name and last_name you have to put the username taken from os module.
```
- Add this new user along with the data that is already present in `data.json` file and then write it again, this will mimic the update functionality of database.
- If there is error in updating the database then:
```
Send the complete error as a response
```
- In case everything is successful then the response will be:
```
The data has been updated, go and check the data file
```
- This writing operation has to be carried out `asynchronously`.

### /people
- Once the client has made a request over here, you are supposed to create a file `people.txt` which will contain the details of all the people from `data.json` file.
- Get the `first_name`, `last_name`, `gender` & `email` of all the people from `data.json` and they should be present in `people.txt` file in following manner (print every data in a new line)
```
First Name: Ceciley Last Name: Baddam Gender: Genderfluid Email: cbaddam6@marriott.com
```
- If there is error in adding the details:
```
Send the complete error as a response
```
- In case everything is successful then the response will be:
```
The file has been created and data has been entered
```
- This operation has to be carried out `synchronously`.
### /address
- Once the client has made a request over here, you are supposed to handle the `ip address` and `family` of `masaischool.com`
- Hint: You can use inbuilt `DNS` module.
- These things should get appended in the `logs.txt` file
```
URL: masaischool.com IP Address: 3.7.198.157 and Family is IPv4
```
- In case everything is successful then the response will be:
```
Logs File has been updated
```

### /yoda
- You have to take help of an external module `yodasay` for this.
- Whatever data is present in the `people.txt` file, send that as a response using yodasay.
- Go through the documentation for this on `npm`.

#### All the things should be there in `logs.txt` in a new line
#### This appending operation has to be carried out `asynchronously`.
#### All the readFile operations should be synchronous.

### Important Points to keep in mind

- You don't have to run the server (listen the server), you just have to export it at the end.
- You are not supposed to use `nodemon` as you are going to export the server.
```
module.exports=server
```
- In order to test the things locally you might need to run the server, but while testing on CP just comment out the `server.listen()` and just export the server.
- Should clean/delete the `logs.txt` each and every time before testing.
- should keep the `data.json` as it was in initial condition, which means we have to remove the added data and make the `data.json` as it was in initial state before testing.

Your solution should be well-organized and easy to understand, with clear and concise comments explaining the logic behind each step.


## Installation

- Node version v16.16.0 is mandatory to use
- please make sure you do not push package-lock.json

```
- run `npm install --engine-strict` to install the node modules.

//Complete functions on index.js

//Test locally
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
