# useReducer Problem 1

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-211 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
Using useReducer hook is MANDATORY
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the reducer function handles the `email` case  - 2 mark
 ✅ Check if the reducer function handles the `password` case - 2 mark
 ✅ Check if the user is able to write in the email input tag- 1 mark
 ✅ Check if the user is able to write in the password input tag - 1 mark
 ✅ should render "no details found" text initially when there is no submitted data  - 1 mark
 ✅ should display the submitted data in a the UI - 1 mark
 ✅ should reset the input fields with intitial data once the details are submitted - 1 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

```
npm install

// run locally
npm run start

// test locally
npm run test

```

## Description

- You are expecred to use useReducer hook to handle the form data
- You need to complete the application which take the email, password from the user.
- User should be able to enter the details in the respective input tags, with the correct type
- Email data should be taken by "input" tag should, with a type 'email'
- Password data should be taken by the "input" tag, with a type 'password'
- When there is no data print `no details found` in div tag with data-testid = `no-user-container`
- ![](https://i.imgur.com/C9r4lb6.png)
- ![](https://i.imgur.com/9IRZDA8.png)
- Once the details are filled and submitted, it should be displayed with the entered details in the UI
  ![](https://i.imgur.com/YMkVgl0.png)
- To reset the reducer state in the initial state, create a additional case in the reducer function,
  - Use reset as one of the types in reducer function to achieve the form reset functionality

## Boilerplate

- You are given these Components:
  - App
    - User should be store all the form data in a **single object** (the initial state of the useReducer hook)
    - You should use the `useReducer` hook to store all the form data, at a single place.
    - user should be able to update the user details, in the input boxes

### Note : The submissions are invalid if `useReducer` hook is not used .

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them, may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.

### Genaral Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
