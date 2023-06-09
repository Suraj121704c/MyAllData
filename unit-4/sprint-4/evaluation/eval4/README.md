### Use of Chakra UI,useReducer and Axios is compulsory in this Assignment

## React Cats Dashboard

## Installation

- Use node version 16.16.0
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install --engine-strict`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Libraries needs to be installed by yourself
2. Make sure that the json-server is up and running at port `8080`
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it and restart the react server
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url where ever you use `http://localhost:8080`

### Not following the above instructions will lead your testcases to fail

## Problem

**_Note_**: Make sure you start `json-server` on `8080` port with provided `db.json` file, then only you will be able to fetch data on this website.

## Understanding Component Structure

- Components
  - Dashboard/ Dashboard.jsx
  - Form/ Form.jsx
  - Pagination/ Pagination.jsx
- App

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json](./db.json)
  - Initial Products should be fetched using json-server only after the application opens.

**Note** - `Make sure you use only the given data and do not create new data. Changing data might result in giving you zero marks`

## Features to build (use Axios)

1. Create a react application for online cats store

2. Use mock json server to maintain the data of cats store

3. use useReducer hook to maintain cats data and initial state should be

```
  data: [],
  isLoading: false,
  error: null,
```

4. Handle all the three status Request,Successand Failure of the API calls through reducer.

5. Every cat has following information:

```
image
name
cost
likes
breed
description
```

6. Use `Spinner` from chakra UI to represent the loading for the API request.

### Get Cats Details and Sort feature

7. When user lands on the page, show them every cat information in a Simplegrid and create buttons for sorting the cats on the basis of its cost.

- (Use json-server to sort cats by cost ascending and by cost descending)
- Two buttons (ascending, and descending) are given in the boilerplate for this
- Make a GET request to `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats` end point and get the cats data with `_sort = cost` and `_order = asc` as default query params
- onload get the cats details in ascending order of cost
- initillay `sort by Asc` button should be disabled and `sort by Desc` button should be enabled
- Logic for sorting ascending and descending by cost should be handled by the json server itself (and not on frontend) (Reference: `https://github.com/typicode/json-server`)
  ![](https://i.imgur.com/bkRWliX.png)

### Filter By Breed

- The Dashboard should have a dropdown with few breed
- on selecting a breed make a request to `/cats` end point and send the breed as param
  - Ex : `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats?breed=persian&_sort=cost&order=asc`
- filter and sort should work together
- User should be ablet sort the filtered results in ascending and descending order
- filtered by breed `peterbald` and the results are in descending order
  ![](https://i.imgur.com/rC0ibFO.png)
- filtered by breed `peterbald` and the results are in asending order
  ![](https://i.imgur.com/79rRDeG.png)

### Delete Feature

- Each card should have a Delete button
- On clicking the delete button make a DELETE request to `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats/<id>`
- render the updated list to the dom. (deleted house entry should be removed from the page as well)

### Post Cat Details

8. There is a toggle button which toggels between `Show Dashboard Page` and `Show Add Cats Page`

- initially the button should have `Show Add Cats Page ` text clicking which a form should be rendered which will take input from the user for adding a cat with the data points mentioned above
- make a POST request to `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cats` end point with the fileld mentioned in the boiilerplate.
- (The logic to conditinally render (or switch between Dashboard and Form component should be handled in App.js)
  ![](https://i.imgur.com/cAYtbBE.png)

9. Ensure that all styling is done using Chakra UI Only.

## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
