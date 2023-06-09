## React Redux Movie Library

### Maximum Marks: 24

```
✅ Able to make submission: - 1 Mark
✅ Check Initial Redux Store Structure for Authentication: - 1 Mark
✅ Check Initial Redux Store Structure for Movies: - 1 Mark
✅ Get request should be made for movies when home page loads: - 1 Mark
✅ isLoading should update accordingly while making request: - 1 Mark
✅ Movie state in store should update when movie loads on homepage: - 2 Marks
✅ All Movies should be displayed on home page: - 1 Mark
✅ On checking filter url should be updated accordingly: - 2 Marks
✅ On checking sorting order url should be updated accordingly: - 2 Marks
✅ On checking filter and sorting together url should be updated accordingly: - 2 Marks
✅ On loading url with initail params should update the filter and sorting checkboxes accordingly: - 2 Marks
✅ On filtering movie data on MovieList component should change accordingly: - 1 Mark
✅ On sorting movie data on MovieList component should change accordingly: - 1 Mark
✅ On filtering, store state should update: - 2 Marks
✅ On Login the store authReducer state should update accordingly: - 2 Marks
✅ user is redirected to login page while visiting /movie/:id, without authentication and should be redirected back to /movie.:id after login: - 2 Marks
```

## Installation

- you can use any node version >= 14 and <=16
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Make sure that the json-server is up and running at port 8080
2. There is a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
3. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server base url

## Folder Structure (Important Files)

```
>Src
├── >Components
│    └── MovieCard.jsx
│    └── MovieList.jsx
│    └── SideBar.jsx
├── >Pages
│    └── HomePage.jsx (Route:- "/")
│    └── LogIn.jsx (Route:- "/login")
│    └── MovieDetail.jsx (Private Route:- "/movie/:id")
│    └── MainRoutes.jsx (Add all Routes here)
└── >Redux
│    └── >AuthReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── >MovieReducer
│    │    └── action.js
│    │    └── actionTypes.js
│    │    └── reducer.js
│    └── store.js
└── App.js
```

## Problem Statement

Create a movie library, where user can see list of movies on homepage. They can apply sort `(based on year)` and filter `(based on rating)` on the list. They should be able to see movie details only if logged in.

**Movie Data is provided in db.json, Do not remove or modify it**

### Step:- 1 Redux

- Create redux store, and use thunk middleware
- Create separate reducer as `authReducer` and `movieReducer` for authentication and movie respectively.
- Use combineReducer
- All the API request will be made in `action.js`
- Initial state for `authReducer` should be

```
{
  isLoading: false,
  isError: false,
  isAuth: false,
  token: "",
}
```

- Initial state for `movieReducer` should be

```
{
  isLoading: false,
  isError: false,
  movies: [],
}
```

### Step:- 2 MovieList

- Complete the `MovieList` component.
- Update the store with the movie data when the component renders
- `isLoading` and `isError` should be updated accordingly as per the request made.
- Show the list of movies in grid format inside div with `data-testid = "movie-list"`.
- Use the `MovieCard` component for showing movie details, with the below constraints
- Every movie card will have class `movie-card`

```
- Show image in image tag with class `movie-image`
- Show title with class `movie-name`
- Show Year in p tag with class `movie-year`
- Show Type in p tag with class `movie-type`
- Show rating in p tag with class `movie-rating`
* Do not add any extra text, only response values should be present *
* For example `Name: "Thor"` or `Rating: 4` will not work *
```

**Provide a link to "/movie/:id" on every movie image**

<img width="1711" alt="Screenshot 2023-02-11 at 12 04 24 AM" src="https://user-images.githubusercontent.com/74458714/218170568-9aecc016-df68-4f98-b628-58e41de72cb7.png">

### Step:- 3 Sorting and Filtering

**Sidebar UI is provided you have to write the logic**

- While checking or unchecking the filtering and sorting checkboxes the url should update accordingly
- Example url:-

```
- http://localhost:3000/?rating=2&rating=3
- http://localhost:3000/?order=asc
- http://localhost:3000/?rating=2&order=asc
```

- Reverse should also be true, i.e. the checkboxes should be checked as per the initial params in the url
- Update the redux store as well with the sorted and filtered data
- The sorted and filtered data should be reflected on DOM as well
- The soring and filtering should work together

### Step:- 4 Authentication

- Use `reqres.in` for login functionality
- Complete the `login` page.
- On successfull login update the redux store accordingly with isAuth and token.
- If the user is not authenticated and tries to visit `/movie/:id`, redirect him to `login` page
- On successfull log-in he should be redirected back to `/movie/:id`, where he was trying to visit, not any other page.
- Complete the `MovieDetail` page and show the movie detail with following
- User can visit the `MovieDetail` page by clicking on the image of any movie.

```
- Show the movie ID in h3 tag with class `movie-id`
- Show image in image tag with class `movie-image`
- Show title with class `movie-name`
- Show Year with class `movie-year`
- Show Type with class `movie-type`
- Show rating with class `movie-rating`
```

<img width="1726" alt="Screenshot 2023-02-10 at 11 52 08 PM" src="https://user-images.githubusercontent.com/74458714/218168111-20d176f0-1679-413c-b9db-0dc609d79fb3.png">

<img width="1698" alt="Screenshot 2023-02-10 at 11 52 31 PM" src="https://user-images.githubusercontent.com/74458714/218168139-c6dfa79f-a983-4726-a400-f9909ed3b3de.png">

### General Instructions:

- Do not remove `data-cy=’xxx` or `data-testid=xxx` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
- You need to submit Github Link as well as Netlify/Vercel Link on Course Platform
- Ensure that the GitHub link is correct. Share the link from where the package.json exists

### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding
- So we request you to read the problem carefully and debug before itself.
