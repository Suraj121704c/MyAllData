# Node_File_Server_Static.

### Maximum Marks - 11

```
✅ able to submit the application - 1 mark (minimum score)
✅ Should serves directory listings - 2 mark
✅ Should serves nested directory listings - 2 mark
✅ Should serves nested file listings - 2 mark
✅ Should serve file contents - 2 mark
✅ Should handle non-existent files and directories - 2 mark
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

```
npm install

// complete functions 

// test locally
npm run test
```

## Test Cases


`** dont forget to export "server" variable it can be give you 0 marks `<br/>
create a file server with nodejs using the `http` module in the index.js file and export it.

- `when the user visits the site, he should see the list of all files and folders in the current directory.`
- `user should be able to ask for different directory content by routes.`

- `listing should appear on URL change you can enter URL manually.`

- invalid url should return `"404 Not Found"`.

```
hints: "/" - return an HTML response. you will have to  manipulate "a" and "li" tags as strings yourself.
```

- `when user clicks on li tag, take them on proper URL /public,/index.js etc.`

```
hint: you can change the request structure like /public/others/test.txt will ask for contents of the `test` directory etc. 
```
### eg:

`/ - shows all directories: index.js,public, __tests__ etc.`

 <img src="https://i.imgur.com/v4z8X2a.png">

`/public - will show content of public directory.`

<img src="https://i.imgur.com/FE2rIgG.png">

`/public/other - will show content of other directory inside others.`

<img src="https://i.imgur.com/GfRGOA6.png">


`/public/other/test.txt - will show content of test.txt file and so on.`

<img src="https://i.imgur.com/Nn3kbYV.png">


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