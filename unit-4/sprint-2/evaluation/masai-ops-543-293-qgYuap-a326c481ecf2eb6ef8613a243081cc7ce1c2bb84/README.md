# React - Fetch - Restaurants

## Submission Instructions [Please note]

### Maximum Marks - 12

- The Submission should not contain spaces, for example `/rct-101 folder/eval` will not work
- Do not push node_modules to github
- Rubrics / Marking Scheme is below ( we will convert this back to a scale of 10 )

```
✅ Able to submit and run the application - 1 mark
✅ should render RestaurantCard.jsx correctly- 2 mark
✅ loading indicator should work - 1 mark
✅ should render Restaurants page - 3 mark
✅ Should work with pagination correctly - 2 mark
✅ should display correct data on page change - 3 marks

```

## Description

- You need to make an application that lists Restaurants from an API
- The user should be able to apply pagination

## Boilerplate

- You are given a set of Components
- Restaurants.jsx
- Restaurants.css
- RestaurantCard.jsx
- RestaurantCard.css
- LoadingIndicator.jsx
- Pagination
  - Pagination component which will have page numbers as buttons
- You are given these dummy elements (anything with data-testid you should not remove or change the attribute values)

## Installation

- You can use the node version >=14 and <=16

```
// install npm packages
npm install

// start application locally
npm run start

// test locally
npm run test
```

## Requirements

- API details
- `url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`
- **query params**:
  - `page`: a number representing the page number
  - `limit`: a number representing the total number of results per page
- **response**
  - `data`: array of restaurant details
  - `totalPages`: a number representing no of pages
- For example `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=1`
- By default when the user loads the page, the user should be shown a set of products
  - of page 1
  - 10 per page
- You cannot use JSON server
- use useEffect to display the data on the UI

- `Restaurants`

  - It should contain a LoadingIndicator component by default ( use Conditional rendering )
    - don't show any other UI when API is loading
  - You need to make an API call and fetch Restaurants data
    - you should fetch ten(10) per page
    - it should be page 1 by default
  - After we fetch restaurants data, hide the loading indicator
  - Display the list of RestaurantCards, and pass appropriate data
  - Display the Pagination component at the bottom

  ![](https://i.imgur.com/MSaM7ic.png)

- `LoadingIndicator`

  - it has an element with the following attribute
    - `data-testid="loading-indicator"`
  - it has the text `...Loading`
  - it will be shown when the API is loading
  - Please hide all other elements in the UI when the API is loading

- `Pagination`

  - it will accept the following properties
    - **current** - a number representing the current page
    - **onChange** - a callback which will be given the new page number `(page)=>{})`
    - **total** - a number representing the total pages present in the list
  - Populate page numbers equal to the number of total pages received from the api response. (refer to the image)
  - The border color of the active button should be `red`
  - by default page number 1 should be the active page
  - on click of any `button` the new page number will be sent to the onChange callback.

- `RestaurantCard`
  - Component to display information about a single restaurant
  - the card should have id =`restaurant-card`
  - it should accept the following props
    - **name** - the title of the restaurant
      - `data-testid="restaurant-card-name"`
    - **type** - The type of the Restaurant
      - `data-testid="restaurant-card-type"`
    - **image** - the image URL of the Restaurant
      - `data-testid="restaurant-card-image"`
    - **rating** - the rating of the Restaurant
      - `data-testid="restaurant-card-rating"`
    - **number_of_votes** - votes of the Restaurant
      - `data-testid = "restaurant-card-votes"`
    - **price_starts_from** - the minimum price of the restaurant
      - `data-testid = "restaurant-card-price"`

#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to the low score.
- Also make sure to cross-check all the spellings and Cases of Texts.

### General Guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
