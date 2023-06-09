## React-cart-component

## Submission Instructions [Please note]

## Maximum Marks - 12

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should have basic structure - 1 mark
 ✅ should render <Product/> component - 1 mark
 ✅ should display all products - 2 marks
  ✅ By Default the Quantity is one and total shows the total value of the cart - 1 mark
 ✅ Increment  Quantity should work - 2 marks
 ✅ Decrement Quantity should work - 2 marks
 ✅ Decrement Should not be possible lesser than 0 - 2 marks

```

## Installation

- **you may use nvm use 14, if that does not work you can try 16 or later**

```
// install npm packages
npm install

// start application locally
npm run start

// test locally
npm run test
```

## Folder structure

- src

  - App.js
  - App.css
  - db.json
  - index.js
  - index.css
  - components
    - Product.jsx
    - product.module.css
  - **tests**
    - App.test.js

- Please make sure you don't make any changes to files except for the files mentioned above.

### Description

- You have to build the following

![image](https://i.imgur.com/3VMxMq1.png)

- It should show the following values:-
  1.  Name:String
  2.  Price:Number
  3.  Quantity:Number
- For the data you can use the data in the db.json file.
- Each Product should have quanity as 1 by default.
- All Products will have 2 Buttons Increment(+) & Decrement(-)
- When clicked on the buttons the quantity of that respective product should increment/decrement.
- disable the decrement button if the quantity is < 0
- You can only decrement a product's value if it's greater than 0.

You are given two Components

### App.jsx

- manage the state of products data here
- initial data should be the data present in db.json

### Product.jsx

- This components should accept the following props
  - name
  - price
  - quantity
  - id
  - handleQty
- onclicking the increment / decrement button `handleQty` callback function should be called with id and payload as arguments
  - the payload is 1 for increment and -1 from decrement

#### **Note**

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
