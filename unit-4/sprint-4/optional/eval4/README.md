### Use of Chakra UI is compulsory in this Assignment

## React Tenant Dashboard

#### Problem Statement

Create the following application the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 12

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should make GET request and render initial houses data  - 2 mark
 ✅ should sort the data in asending and descending order by rent - 2 marks
 ✅ should fetch the search results accrding to the search query param- 2 marks
 ✅ should make DELETE request succesfully - 2 marks
 ✅ Should make POST request to add details and update the dom successfully - 3 marks
```

## Installation

- Use node version >=14 and <=16
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
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
- App

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json](./db.json)
  - Initial Products should be fetched using json-server only after the application opens.

**Note** - `Make sure you use only the given data and dont create new data. Changing data might result in giving you zero marks`

## Features to build

1. Create a react application for finding houses on rent

2. Use mock json server to maintain the data of houses on rent

3. Every house has following information:

```
Name
Owners name
Address
Area code
rent
isBachelorAllowed
isMarriedAllowed
```

4. When user lands on the page, show them every house information in a table and create buttons for sorting the table data on the basis of its rent.

- (Update the data in the state only, json-server data should not be changed)
- Two buttons (ascending, and descending) are given in the boilerplate for this
- Make a GET request to `/houses` end point and get the houses data
- sorting ascending and descending by rent logic mange with in the component no API call required.
- Each entry should have a Delete button
- On clicking the delete button make a DELETE request to `/houses/<id>`
- render the updated list to the dom. (deleted house entry should be removed from the page as well)

5. The user should be able to do a keyword search from the houses data. Use query params to achieve this When the user types anything in the input tag to search- show only the filtered results in the table

- make an API call to this end point `/houses?q=<search-keyword>`

6. There is a toggle form button, clicking which a form should be rendered which will take input from the user for adding a house with the data points mentioned above

- make a POST request to `/houses` end point with the fileld mentioned in the boiilerplate.
- (The logic to conditinally render (or switch between Dashboard and Form component should be handled in App.js)

7. Ensure that all styling is done using Chakra UI Only.

<img width="1728" alt="Screenshot 2023-01-12 at 11 20 42 AM" src="https://user-images.githubusercontent.com/39851506/211992449-2be7204c-0ee6-4b65-a89a-abd68f430f80.png">

<img width="1723" alt="Screenshot 2023-01-12 at 11 20 22 AM" src="https://user-images.githubusercontent.com/39851506/211992363-13d05066-3487-417d-9f1e-cff2a6c911f0.png">

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
