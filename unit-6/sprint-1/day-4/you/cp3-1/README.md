# Node_File_Server_Dynamic.

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

- `make the listing with proper UI and Icons and anchor tags.`
```
Unicode HTML-code for folder - &#128193;
Unicode HTML-code for file - &#128441;


hints: "/" - return an HTML response. you will have to manipulate li tags as strings yourself.
```

- `when user clicks on li tag, take them on proper URL /__tests__, etc.`
- in backend handle `/__tests__` route dynamically it cannot be hardcoded.

```
hint: you can change the request structure like /_tests_/test will ask for contents of the `test` directory etc.
To go to the correct folder or file use the nodejs `path` module. 
```
### eg:

`
 / - shows all directories: index.js, __tests__ etc.`

 <img src="https://i.imgur.com/8Msqzs7.png">

`/__tests__ - will show content of __tests__ directory.`

<img src="https://i.imgur.com/l2s6vlu.png">

`/__tests__/other - will show content of other directory inside __tests__ and so on.`

<img src="https://i.imgur.com/LZki7ht.png">




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