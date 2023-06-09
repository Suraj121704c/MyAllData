# Node File Uploader

### Maximum Marks - 5

```
✅ able to submit the application - 1 mark (minimum score)
✅ able to setup express server - 1 marks
✅ able to upload a file to server- 3 marks
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

## Folder Structure

- src
  - index.html (use for creating frontend for form)
  - index.js
- uploads (created by multer)

## Note

- uploaded file name should be stored same as uploaded

## Test Cases

- Create a express server in the index.js file and export it.
- `It will accept 2 different methods, GET, POST.`
- The server will have 5 routes.

```
GET - /
POST - /upload
```

- use [multer][http://expressjs.com/en/resources/middleware/multer.html] for file uploading

##### GET

- /
  - response `{ message: "welcome to server }"`
  - should return's response with status code "200"

##### POST

- /upload
  - post file on this route
  - response should look like with status "200"

```
{
   message: "file uploaded successfully"
}
```

## Evaluation Criteria

- able to setup express server
- able to use multer for file uploading

## General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
