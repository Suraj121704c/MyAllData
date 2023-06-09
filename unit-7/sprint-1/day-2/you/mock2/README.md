# JS-football dashboard

## Submission Instructions [Please note]

## Maximum Marks - 18

- The Submission should not contain spaces, for example,/js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score ).
 ✅ Should make the fetch request on page loads and append data to the tbody- 2 marks.
 ✅ check if the next and pre button is working or not - 2 marks.
 ✅ filter button is redirection to its page or not - 1 mark
 ✅ check whether able to see matches of 2013 on selecting - 3 marks.
 ✅ check showing matches of 2011 on selecting - 3 marks.
 ✅ check showing matches of specific team1 or specific team2 along with year - 6 marks

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- run `npm install --engine-strict` to install the node modules
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path

## Setup Guidelines

- ### Start only Frontend server:- `npm run start`

## Folder structure

- index.html
- filter.html
- src
  - scripts
    - index.js
    - filter.js   
- styles
  - index.css
  - filter.css
- README.md
- package.json
- cypress (ignore the file under cypress)

### You haven't taught cypress to run the test cases locally, you can see the passed/ failed test cases and test errors on CP itself.

## Description

***Use ES6 thoroughly***
- Create a mini Football App, Where users can see the details of all the football matches played between 2011 and  2016;
- API url :- `https://jsonmock.hackerrank.com/api/football_matches`


### index.html (homepage)
- Develop a homepage that displays a list of football matches
- Implement pagination functionality using "Previous" and "Next" buttons
- Allow users to navigate between pages by clicking the pagination buttons
- The API will provide data of page 1 by default with 10 results. On page load, you need to show these results by requesting the API
- Use query param to get the filtered data.(for getting page 2(?page=2) or page 3(?page=3) data)
- Redirect users to a separate filter page when they click the "Filter" button

## Things to follow:-

  ```
  1. Don't change the id's provided in the template.
  2. Filter button on the top should be redirected to filter.html upon clicking on it.
  3. After fetching the data append it to the table and follow the order as in thead.
  ```

- Check the below image for a better understanding
 ![alt text](https://i.imgur.com/q8QLx5M.png)

### filter.html

- Create a filter page that initially displays all matches played in 2011 by getting data from API.
- Provide three dropdown menus for selecting year, team1, and team2
- Allow the user to filter matches based on the year and either team1 or team2 criteria, with the filtered data being populated automatically without the need for a button click. Additionally, enable the user to filter matches based on just the year as well.
- Ensure that the application functions correctly for both filter cases

- Things to follow
  ```
  1. Don't change the id's provided in the template.
  2. After fetching the data append it to the table and follow the order as in thead.
  3. The select options and values are already mentioned in the problem, don't change them, just add functionality to them.
  4. When the user applies a filter fetch the data by making API request with the help of query params.
  ```

![alt text](https://i.imgur.com/4coZcfI.png)

![alt text](https://i.imgur.com/ghNCPOQ.png)

![alt text](https://i.imgur.com/1LHzn2e.png)

#### Hint for adding query  params
- for ex:-....football_matches?year=2012&team2=Arsenal
- Add don't do any App sorting or filtering, you need to make a request to the API and get the data for every operation.

**Note:- Do not use any other names for the Ids, Classes, and local storage key other than those mentioned.**


#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not submit it last minute
- try to keep one submission at a time
