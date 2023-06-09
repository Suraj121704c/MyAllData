## Javascript fetching and giving a new shape to the fetched data

## Installation
```
npm i
```

## Test 
```
npm t -- --watchAll
```

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ fetches product data- 3 mark
 ✅ sorts product data by price - 3 marks
 ✅ re-formats data as object - 3 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Folder structure

- index.html
- src
  - config.js
  - index.js
  - `__tests__`
    - index.test.js
- README.md
- package.json

## Description

- You need to the following API for this problem
  
  - BaseURL: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products`

- Complete the the given function such that it fulfills the below criteria:

- `getProducts`

  1.  The function getProducts() should return a promise that resolves to product items.
  2.  Use try-catch block to catch errors, if any.

- `getProductsSortedByPrice`

  1.  The function getProductsSortedByPrice() should return a promise that resolves to product items.
  2.  This time the product items should be sorted by their price in ascending order (low to high).
  3.  You are free to use `getProducts()` function here to fetch the products.

- `getWellFormattedData`

  1.  The function `getProductsSortedByPrice()` should return a promise that resolves to an object with `brand` as keys and an `array of product ids` as value.
  2.  for example, if product `6`,`7`,`8`,`9` & `10` 's brand is `Apple`, the property `Apple` would look like:
      ```
      Apple: [6,7,8,9,10]
      ```
  3. Example result: 
      ```
        {
            Zebronics: [1,2,3,4,5],
            Apple: [6,7,8,9,10],
            HP: [11,12,13,14,15],
            Dell: [16]
        }   
      ```    
  4.  You are free to use `getProducts()` function here to fetch the products.



**Note:- Do not use any other names for the methods other than those mentioned.**

####

## Boilerplate

- Do not change the given folder structure
- You can find JS code under src folder in a filename index.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time


