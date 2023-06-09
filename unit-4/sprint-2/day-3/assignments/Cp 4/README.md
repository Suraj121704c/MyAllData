# react-flight-search

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Initial UI is rendered as expected  - 1 mark
 ✅ Flight search works as expected - Search 1 - 1 mark
 ✅ Flight search works as expected - Search 2 -  2 marks
 ✅ Shows No Flights Found when no matches found - 1 mark
 ✅ Perform multiple searches and display the results in a tabular format - 2 marks
 ✅ fetch flight data call should work properly with mock data - 2 marks
```

## Description

- You need to complete the search application which takes the source and destination from the user.
- Onload make a fetch request to get the flights data
  ` https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1`
- when the source and destination fields are empty display `No Flights Found`
  ![](https://i.imgur.com/mox1Bux.png)
- once the user enters the details and clicks on the search button filter the data which matches the source and destination in the received API response and display it in a tabular format
  ![](https://i.imgur.com/KSJrG06.png)
  - if there is no match found for the given source and destination No Flight Found should be displayed
    ![](https://i.imgur.com/YUw4lS0.png)

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.

## Boilerplate

- You are given these Components:
  - App
    - should have FlightSearch component imported
  - FlightSearch
    - make a fetch request and get the flight's data and work on the search
  - SearchReasults
    - should accept the search results of flight data as props
    - should display the results in a tabular format.

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

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
