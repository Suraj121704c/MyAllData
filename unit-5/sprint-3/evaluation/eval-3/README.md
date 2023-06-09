## React Redux Student Bounty Dashboard

### Maximum Marks: 26

```
✅ Able to make a submission: - 1 Mark
✅ Check Initial Redux Store Structure for Authentication: - 1 Mark
✅ Check Initial Redux Store Structure for students: - 1 Mark
✅ Get request should be made for students when the home page loads: - 1 Mark
✅ isLoading should update accordingly while making the request: - 1 Mark
✅ Student state in store should update when get request is made on the homepage: - 2 Marks
✅ All students should be displayed on the home page: - 1 Mark
✅ On Login the store authReducer state should update accordingly: - 2 Marks
✅ user is redirected to login page while visiting /student/:id, without authentication and should be redirected back to /student.:id after login: - 2 Marks
✅ On checking filter URL should be updated accordingly: - 2 Marks
✅ On visiting URL with initial params the checkboxes should be checked accordingly: - 2 Marks
✅ On filtering the data in the redux store should also be filtered accordingly: - 1 Mark
✅ On filtering the the UI on the home page should update accordingly: - 1 Mark
✅ By default the page number 1 data i.e 10 items should be present on the homepage: - 1 Mark
✅ On loading the homepage, the store should also should have only page 1 data: - 2 Marks
✅ On clicking the previous and next button, data should update accordingly on UI: - 2 Marks
✅ On changing the page number the URL should be updated: - 1 Mark
✅ Filtering and pagination should work together: - 2 Mark
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

//to start the json-server

npm run server
```

- **_Note_**:

1. Make sure that the json-server is up and running at port 8080
2. There is a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server base url

## Folder Structure (Important Files)

```
>Src
├── >Components
│    └── StudentCard.jsx
│    └── StudentList.jsx
│    └── PrivateRoute.jsx
│    └── SideBar.jsx
├── >Pages
│    └── HomePage.jsx (Route:- "/")
│    └── LogIn.jsx (Route:- "/login")
│    └── StudentDetail.jsx (Private Route:- "/student/:id")
│    └── MainRoutes.jsx (Add all Routes here)
└── >Redux
│    └── >AuthReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── >StudentReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── store.js
└── App.js
```

## Problem Statement

Create a Student Bounty dashboard where one can see the list of students with the number of green cards.
With functionalities like authentication, filtering and pagination.

### Redux

- Create a redux store, and use thunk middleware
- Create separate reducers as `authReducer` and `studentReducer` for authentication and student respectively.
- Use combineReducer
- All the API requests will be made in `action.js`
- Initial state for `authReducer` should be

```
{
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}
```

- Initial state for `studentReducer` should be

```
{
  isLoading: false,
  isError: false,
  students: [],
}
```

### StudentList

- Complete the `StudentList` component.
- Update the store with the student data when the component renders
- `isLoading` and `isError` should be updated accordingly as per the request made.
- Show the list of students in grid format inside div with `data-testid = "student-list"`.
- Use the `StudentCard` component for showing student details, with the below constraints
- Every student card will have class `student-card`

```
- Show image in image tag with class `student-image`
- Show name with class `student-name`
- Show batch in p tag with class `student-batch`
- Show the number of green card in h3 tag with class `student-green-card`
- Show `View Details` button with class `student-detail`
* Do not add any extra text, only response values should be present *
* For example `Name: "Ankit"` or `Card: 5` will not work *
```

### Filtering

**Sidebar UI is provided you have to write the logic**

- While checking or unchecking the filtering checkboxes the url should update accordingly
- Example url:-

```
- http://localhost:3000/?batch=WEB101
- http://localhost:3000/?batch=WEB101&batch=RCT101
```

- Reverse should also be true, i.e. the checkboxes should be checked as per the initial params in the url
- Update the redux store as well with the filtered data
- The filtered data should be reflected on DOM as well

<img width="1725" alt="Screenshot 2023-03-17 at 8 01 45 PM" src="https://user-images.githubusercontent.com/74458714/225934626-4ff041f2-3ed8-4143-8533-75b22102a642.png">


### Authentication

- Use `reqres.in` for login functionality
- Complete the `login` page.
- On successful login update the redux store accordingly with isAuth and token.
- If the user is not authenticated and tries to visit `/student/:id`, redirect him to `login` page
- On successful log-in, he should be redirected back to `/student/:id`, where he was trying to visit, not any other page.
- Complete the `StudentDetail` page and show the student detail with following
- Users can visit the `StudentDetail` page by clicking on the button provided.

```
- Show the `student id` in h3 tag with class `student-id`
- Show image in image tag with class `student-image`
- Show name with class `student-name`
- Show student code in p tag with class `student-code`
- Show batch in p tag with class `student-batch`
- Show score in p tag with class `student-score`
- Show the number of green cards in h3 tag with class `student-green-card`
```

<img width="1726" alt="Screenshot 2023-03-17 at 8 01 55 PM" src="https://user-images.githubusercontent.com/74458714/225934667-f0fe4d14-80a6-42f8-a77c-02c3666bd524.png">

<img width="1728" alt="Screenshot 2023-03-17 at 8 02 12 PM" src="https://user-images.githubusercontent.com/74458714/225934712-cd9e9819-eed3-44a2-9d85-2785a59f1d06.png">


### Pagination

**Refer the json-server documentation for this**

- Two button `Previous` and `next` has been provided in the sidebar
- Complete the pagination functionality
- Every page will have only 10 items.
- The home page should load with page number 1
- Initial URL will look like :-

```
http://localhost:3000/?page=1
```

- On clicking the next and previous buttons the page number should change accordingly
- The store also should be updated with that particular page number data only
- Update the URL as well when the page changes.

```
http://localhost:3000/?page=3
```

- On reloading the URL, the data with that page number should persist.
- Filtering and pagination should work together

```
http://localhost:3000/?batch=RCT101&batch=NXM101&page=1
```
**Note:- While making pagination get request add `limit` first then `page` in the URL**

### General Instructions:

- Do not remove `data-cy=’xxx` or `data-testid=xxx` from anywhere inside the code. They are the test inputs, and removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
- You need to submit Github Link on the Course Platform
- Ensure that the GitHub link is correct. Share the link from where the package.json exists

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding
- So we request you to read the problem carefully and debug it before itself.
