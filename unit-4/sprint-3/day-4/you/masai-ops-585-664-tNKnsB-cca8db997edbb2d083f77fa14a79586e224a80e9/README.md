## React Routing & Authentication Assignment

#### Problem Statement

Create the following application the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 18

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if navbar is present on all pages - 2 mark
 ✅ Check if page is redirected to home component correctly on clicking Home - 2 marks
 ✅ Check if page is redirected to about component correctly on clicking About - 2 marks
 ✅ Check if page is redirected to contact component correctly on clicking Contact - 2 marks
 ✅ Check if products page is private - 3 marks
 ✅ Check if auth is working properly, and login page is redirecting to home after authentication - 3 marks
 ✅ Check if products page is working properly - 3 marks
```

## Installation

- you should use any node versionin this range  >=14 and <=16 
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.

1. Libraries needs to be installed by yourself


### Not following the above instructions will lead your testcases to fail

## Problem

## Understanding Component Structure

- App
  - Login (should be rendered on route "/login")
  - Home (should be rendedered on default route "/")
  - About (should be rendered on route "/about")
  - Contact (should be rendered on route "/contact")
  - Products (should be rendered on route "/products")
- Context
  - AuthContextProvider
- Routes
  - AllRoutes
  - PrivateRoute

**Note** - `Make sure you use only the given components and dont create new files and folders. Changing component name, structures might result in giving you zero marks.`


## Features to build

1. Create a navbar which has the following links (strcitly should have the same order as below)
   - Login
   - Home
   - About
   - Contact
   - Products
   
2. Clicking on the navbar link should redirect the user to that component and update url at the same time

3. Navbar component should be visible on every page

4. Products page should only be accesible only after login

5. Use this api to fetch the products data: ```https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products```

6. redirect the user to login page if the user tries to access product page without loging in

7. User should always be redirected to home when the login form is successfully submitted

8. Login page should be accessible after loging in, rather redirect the user to "/" page (Use Private Route component to achieve this)

9. Use context api to maintain state in the application: 
   - Your initial state should have ```isAuth``` as false

<img width="1728" alt="Screenshot 2022-12-22 at 3 17 16 PM" src="https://user-images.githubusercontent.com/39851506/209118397-8e27e719-9bfc-4d90-a680-bef4019cf344.png">

<img width="1727" alt="Screenshot 2022-12-22 at 3 17 43 PM" src="https://user-images.githubusercontent.com/39851506/209118409-458fa134-fc9d-4f0d-9640-1487c6d3b095.png">

<img width="1728" alt="Screenshot 2022-12-22 at 3 17 49 PM" src="https://user-images.githubusercontent.com/39851506/209118422-8f45611b-ca00-4c60-8875-715f82ffa375.png">

 <img width="1728" alt="Screenshot 2022-12-22 at 3 17 55 PM" src="https://user-images.githubusercontent.com/39851506/209118437-d771da97-4483-4a68-afb0-d2cf5ddb0f78.png">

<img width="1727" alt="Screenshot 2022-12-22 at 3 18 02 PM" src="https://user-images.githubusercontent.com/39851506/209118447-ed12c116-4825-46ad-9976-a42df0d82ce2.png">


## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
