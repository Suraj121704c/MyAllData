# React - Theme Context

## Submission Instructions [Please note]

### Maximum Marks - 13

- The Submission should not contain spaces, for example `/rct-101 folder/eval` will not work
- Do not push node_modules and package_lock.json to github
- Rubrics / Marking Scheme is below ( we will convert this back to a scale of 10 )

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ check if by default the application is in light theme - 2 marks
 ✅ check if theme changes on choosing dark theme - 3 marks
 ✅ check if no props are being passed to dashboard, and state is managed by context api - 3 marks
 ✅ check if the theme is sent to user component as props-1 - 2 marks
 ✅ check if the theme is sent to user component as props-2 - 2 marks
```

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

## Description

- You need to make an application which displays Dashboard with user components, and have an option to toggle themes
- You need to maintain state (theme) using context API

## Boilerplate

- You are given following components
- `Components`

  - `Dashboard`
    - you are given a container with data-testid = `dashboard-cont` (it should have the background color)
    - The theme should be selected from the select tag
      - Light theme
        - for the light theme background color of the container should be white
        - text color of the user infor should be black
      - Dark theme
        - for the dark theme background color of the container should be black
        - text color of the user info should be white
    - Fetch the theme data from context API on selecting a particular theme
    - users data is given in the db.json
  - `User`
    - This component should receive two properties (donot chnage the names)
      - `isDarkTheme` (boolean)
      - `user` (user object consists of user details )
    - Each user's info should be in this component only (db.json is provided with data)
    - you can give the color to the parent div with `data-testid =user` based on currentTheme value (the color will be reflected to all children tags)
    - the slider of each user in the given screenshot is an input tag with type = `range` it should have a data-testid = `level`
      - the `accent-color` property of this input should be `yellow` for dark theme and `blue` for light theme
    -

- `Context`

  - ThemeContextProvider
    - mantain your application state here and wrap your enitire app around it
    - Default State:
      ```
      isDarkTheme: false,
      ```

- You are given these dummy elements (anything with data-testid you should not remove or change the attribute values)

### `Light theme`

![](https://i.imgur.com/OQBGepb.png)

### `Dark Theme`

![](https://i.imgur.com/8ehiy5w.png)

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
