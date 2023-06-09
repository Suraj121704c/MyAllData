# React - Countries List

## Submission Instrions [Please note]

### Maximum Marks - 10

- Do not push node_modules to github
- Rubrics / Marking Scheme is below ( we will convert this back to a scale of 10 )

```
✅ Able to submit and run the application - 1 mark
✅ CountriesCard works correctly - 1 mark
✅ Pagination component works correctly - 1 mark
✅ Should render Countries data correctly - 4 mark
✅ Should work with pagination correctly - 3 mark
```

## Description

- You need to make an application which lists Countries from an api
- User should be able to apply pagination
- [Video Explainer](https://masai-course.s3.ap-south-1.amazonaws.com/material/videos/35766/eXbOoPOlEDe2qAJwPFRACRw7ukps2X8OQPRBTBiB.mp4)

## Boilerplate

- You are given a set of Components
- Countries.jsx
- CountriesCard.jsx
- CountriesCard.module.css
- LoadingIndicator.jx
- Pagination
  - Pagination component which will have prev, next, current and total pages
- You are given these dummy elements (anything with data-testid you should not remove or change the attribute values)

## Installation - CRA - Recommended

- **you may use nvm use 14, if that does not work you can try 16 or later**
- The time provided is also inclusive of installation and setup

```
// install npm packages
npm install

// start application locally
npm run start

// test locally
npm run test
```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time

## Alternate installation ( using Codesandbox )

- If you are facing difficulty with setting CRA locally
- use the following link `https://codesandbox.io/s/c2-problem-hdjsn7`
- please make sure you are logged in
- you can fork or create a new copy of the codesandbox
- ![Fork](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-09-11/Screenshot%202022-09-11%20at%2010.52.33%20PM_721655.png)
- You can view tests on codesandbox here
- ![Test Suite](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-09-11/Screenshot%202022-09-11%20at%2010.54.50%20PM_522331.png)
- Export to zip when you are done
- ![Export to Zip](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-09-11/Screenshot%202022-09-11%20at%2010.53.51%20PM_449006.png)
- After downloading, move it to your masai course repo
- submit it to the assignment on Coding Platform
- It will judge your score, this will be the final score
- We will not accept codesandbox links as submissions

## Requirements
**Please take the API details from here as it's the latest documentation**

- API details
- `url`: `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`
- **query params**:
  - `page`: a number representing the page number
  - `limit`: a number representing total number of results per page
  - `sort`: string "population" ( Right now we only support sort by population criteria. you have to mention the same )
  - `order`: order the countries in ascending or descending manner, based on the price field. use strings "asc","desc".
- **response**
  - `data`: array of countries
  - `totalPages`: number representing no of pages
- example `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=1&limit=10&sort=population&order=asc`
- By default when the user loads the page, the user should be shown a set of countries
  - of page 1
  - 10 per page
- You cannot use JSON server
- use useEffect to display the data on the UI

- `Countries`

  - It should contain a LoadingIndicator component by default ( use Conditional rendering ) when the API request is being made
    - dont show any other UI when API is loading
    - when the page loads, display loading indicator
  - You need to make an api call and fetch countries data when the component is mounted
    - you should fetch ten (10) countries per page
    - it should be page 1 by default
    - you dont need to pass the order and sort parameters ( only page, and limit )
  - After we fetch countries data, hide the loading indicator
  - Display the list of CountriesCard, and pass appropriate data
  - Display Pagination component at the bottom
  - Use useEffect to make the API calls
  - when the page numbers change, the data also has to change accordingly
  - when the API is loading, the loading indicator should be shown again
  - **Important** Please make sure only the Loading Indicator component is shown when API is loading

- `LoadingIndicator`

  - it has an element with the following attribute
    - `data-testid="loading-indicator"`
  - it has the text `...Loading`
  - it will be shown when the api is loading
  - Please hide all other elements in the UI when the API is loading

- `Pagination`

  - it will accept the following properties
    - **current** - a number representing the current page
    - **onChange** - a callback which will be given the new page number `(page)=>{})`
      - it should be added to any button (like Prev, Next and current page)
    - **total** - a number representing the total pages present in the list
  - by default the Prev button (data-testid="prev-button") should be disabled
  - the Next button (data-testid="next-button") should be disabled if you are on the last page
  - The current page should be shown in the button with data-testid `current-page`
  - The total pages should be shown in component, under the element with `data-testid="total-pages"`
    - When clicking you should make a new request and it should show the results in the UI
  - on click of any `button` the new page number will be sent to the onChange callback.

- `CountriesCard`
  - Component to display information of a info about the country
  - it should accept the following props
    - **country** - the title of the country
      - `data-testid="country-card-name"`
    - **population** - The populaton of the Country
      - `data-testid="country-card-population"`
