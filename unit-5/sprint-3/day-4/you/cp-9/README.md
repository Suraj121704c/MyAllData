## React-Redux-Data-Dashboard

#### Problem Statement

Create a data dashboard where the user is able to render different data on different pages

## Submission Instructions [Please note]

## Maximum Marks - 12

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check Initial Redux Store Structure - 2 marks
 ✅ Check if store data is being updated with coffee data - 3 marks
 ✅ Check if store data is being updated with restaurant data - 3 marks
 ✅ Check if store data is being updated with employee data  - 3 marks
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

```
// install node_modules
npm install --engine-strict

// run locally
npm run start

```
- **_Note_**:

1. Libraries needs to be installed by yourself

#### Steps

### Testing Objectives

- Ability to set up a Redux and connect it with your React application
- Ability to use Redux, and Redux-Thunk, for storing and accessing application data, respectively
- Ability to get, and update data in redux store

### Understanding Component Structure

- Components
  - CoffeeData.jsx (should be rendered on "/coffee-data")
  - RestaurantData.jsx (should be rendered on "/restaurant-data")
  - EmployeeData.jsx (should be rendered on "/employee-data")
  - Navbar.jsx
- Routes
  - All Routes

### Redux

- Store

**NOTE**: Redux is mandatory for this application

1. Some of the boilerplate is provided. You are expected to write all the other remaining parts (action-creators, reducer file logic, etc) to set up the redux store.
2. Make sure Redux is connected with your React application properly, and you have access to the Redux store data

### Features to build:

1. The user should be able to create a navbar with following links (strictly in this order)
   - Coffee Data
   - Employee Data
   - Restaurant Data

2. Clicking on the navbar link should redirect the use to the relevant page. Use below apis to fetch data respectively:
  - Coffee Data:  ```https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee```
  - Employee Data:  ```https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees```
  - Restaurant Data:  ```https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants```

3. Your initial redux state should look like this
   ```
   coffeeData: [],
   restaurantData: [],
   employeeData : []
   ```

5. Esnusre that all api calls are being done in actions.js and actionTypes are created for the same.


<img width="1728" alt="Screenshot 2022-12-22 at 12 48 38 PM" src="https://user-images.githubusercontent.com/39851506/209079252-7eb04c0f-08a1-4e9e-89d2-8fb8e746a768.png">


### General Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
