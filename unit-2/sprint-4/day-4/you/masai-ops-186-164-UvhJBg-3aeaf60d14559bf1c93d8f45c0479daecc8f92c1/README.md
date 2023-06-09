# JS-Basic-Odd-Even

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Random number is getting generated and visible on DOM at click of the button - 3 marks
 ✅ OddEven function return the corrct output for even number - 3 marks
 ✅ OddEven function return the corrct output for odd number - 3 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path


## Folder structure

- index.html
- src
  - oddEven.js
- `__tests__`
  - oddEven.spec.js
- README.md
- package.json

( You have to code in index.html and oddEven.js ignore the rest)
## Description

 Create an application which generates a random number and then tells whether the number is odd or even

- Complete the two given function such that it fulfils the below criteria:

  - ```generateNumber```

     1. This function should be invoked on the click of generate number button.

     2. Generate a random *integer* between 1-100

     3. Update the value of div with id = ```number``` with the generated number.

     4. Invoke the ```checkOddEven``` func with the generated number argument.

   - ```checkOddEven```

     1. This function will accept the random generated numbers as param

     2. The function should whether the number is odd or even and then give the output as follows:
       - *Even* - The number is even
       - *Odd* - The number is odd

     3. The output should be updated as text for div with id = ```odd-even```. (use only textContent to append the data)

 

  **Note:- Do not use any other names for the methods other than mentioned.**

  ####

## Boilerplate

- Do not change the given folder structure
- index.html
- You can find JS code under src folder in a filename oddEven.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
