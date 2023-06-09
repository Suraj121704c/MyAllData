# React - Auth Context

## Submission Instructions [Please note]

### Maximum Marks - 10

- The Submission should not contain spaces, for example `/rct-101 folder/eval` will not work
- Do not push node_modules and package_lock.json to github
- Rubrics / Marking Scheme is below ( we will convert this back to a scale of 10 )

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ App loads correctly - 1 mark
 ✅ check if token is being displayed after aunthentication - 3 mark
 ✅ check if authentication works only with right credentials - 2 mark
 ✅ check if the values are getting updated in context api - 3 mark
```

## Description

- You need to make an application which displays Dashboard only when the user is authenticated
- You need to maintain state using context API
- Authentication will be done with this API: ```https://reqres.in/api/login```

## Boilerplate

- You are given following components
- `Components`
  - Dashboard
     - you are given this already
     - display the token from the api to the user
   - Login
     - user should be able to login from here
     - use reqres.in api for logging in
     - you need to maintain the user auth state in a context API
     - on clicking name here you should be able to be redirected to the `/restaurants/<id>` page
   - App
     - should handle the conditional rendering between Login and Dashboard
- `Context`
  - AuthContextProvider
    - mantain your application state here and wrap your enitire app around it
    - Default State: 
      ```
      isAuth: false,
      loading: false, 
      error: null,
      token: ""
      ```

- You are given these dummy elements (anything with data-testid you should not remove or change the attribute values)

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


#### `Login.jsx`

- A user should be able to login from here
- There is a form already made for you
- You need to complete it with by using the following api
- `POST`
- https://reqres.in/api/login
- DOCS: https://reqres.in/
- You need to maintain the authentication state in context API
- `isAuth`, and `token`
- once logged in, a user is shown Dashboard component

<img width="307" alt="Screenshot 2022-11-30 at 9 04 27 PM" src="https://user-images.githubusercontent.com/39851506/204968701-62f24536-df8b-4d8c-ac12-b94b55b25e2f.png">

<img width="326" alt="Screenshot 2022-11-30 at 9 04 44 PM" src="https://user-images.githubusercontent.com/39851506/204968717-c41f7243-1e70-4151-a5b3-b25a7c34e653.png">


#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time

