## React-Redux-Data-Dashboard


## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Maximum Marks - 13

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check Initial Redux Store Structure - 2 marks
 ✅ Check if isLoading is being updated while visiting coffee page - 1 mark
 ✅ Check if store data is being updated with coffee data - 2 marks
 ✅ All coffee should be displayed on the DOM - 1 mark
 ✅ Check if store data is being updated with restaurant data - 2 marks
 ✅ All restaurant should be displayed on the DOM - 1 mark
 ✅ Check if store data is being updated with employee data - 2 marks
 ✅ All employee should be displayed on the DOM - 1 mark
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
  - `npm start`
 
- **_Note_**:

- You can test the submission on CP only

### Problem Statement

Create a data dashboard where the user is able to render different data on different pages


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
  
  `Strictly follow the routes end point provided above`
- Routes
  - AllRoutes.jsx (Provide the routes here)
- Redux
  - AppReducer
    - action.js
    - actionTypes.js
    - reducer.js
  - store.js



### Redux

- Store

**NOTE**: Redux is mandatory for this application

1. Some of the boilerplate is provided. You are expected to write all the other remaining parts 
2. Complete the action, actionTypes and reducer file
3. All the api calls will be made in action.js
4. Make sure Redux is connected with your React application properly, and you have access to the Redux store data

### Features to build:

1. The user should be able to create a navbar with following links (strictly in this order)

   - Coffee Data
   - Employee Data
   - Restaurant Data

- Do not add any extra child element or component in the navbar other than the above three.

2. Clicking on the navbar link should redirect the user to the relevant page. Use below apis to fetch data respectively:

- Coffee Data: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`
- Employee Data: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`
- Restaurant Data: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`

- The user should be able to see list of all items in the respective pages.

3. Your initial redux state should look like this

   ```
   isLoading: false,
   isError: false,
   coffeeData: [],
   restaurantData: [],
   employeeData : []
   ```

4. Esnusre that all api calls are being done in actions.js and actionTypes are created for the same.
5. Update the store with the respective data on successfull request.
6. `isLoading` will become `true` while making network request and become `false` on success
7. `isError` will become `true` if the request is failed.

<img width="1728" alt="Screenshot 2022-12-22 at 12 48 38 PM" src="https://user-images.githubusercontent.com/39851506/209079252-7eb04c0f-08a1-4e9e-89d2-8fb8e746a768.png">

### General Instructions:

- Do not remove or change `className='xxx'` or `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
