## Redux Theme Counter

#### Tags

Redux, dispatch actions, combine reducers

## Submission Instructions [Please note]

### Maximum Marks - 12

- The Submission should not contain spaces, for example `/rct-101 folder/eval` will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅should have basic structure - 1 mark
 ✅ theme and counter actions should return correct objects with type and payload - 1 marks
 ✅ counterReducer function should return the correct counter state/data for Add - 1 marks
 ✅ counterReducer function should return the correct counter state/data for Reduce - 1 marks
 ✅ the themeReducer function should return  the correct theme state/data for dark theme - 1 marks
 ✅ the default counter value should be  10 - 1 mark
 ✅ the counter value should be updated when clicked on the Add button  - 1 mark
 ✅ the counter should be updateds when clicked on the Reduce button - 1mark
 ✅ the deafult theme should be 'light'
      1.Switch to Light button should be disabled
      2.Switch to Dark should be enabled      -  2 marks
  ✅ the theme should be toggeld  on clicking Switch to Dark and Switch to Light buttons - 1mark
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

// test locally
npm run test
```

- use redux to create a store and write in the following files
  - action.js ( action object creators )
  - counterReducer.js ( reducer function for Counter)
  - themeReducer.js (reducer function for Theme)
  - store.js ( store )
  - Use combineReducers to combine both themeReducer and counterReducer in the store.
- Create these components
- Counter.jsx
- CounterValue.jsx ( contains the counter value, retrieve it from store using useSelector hook ).
- CounterButtons.jsx

  - should have two buttons
    - one button with `ADD` text
      - onclicking `ADD` button an action should be dispatched to `handleAdd` function, with payload as 1
    - another button with `REDUCE` text
      - onclicking `ADD` button an action should be dispatched to `handleReduce` function, with payload as 1

- Theme.jsx

  - it should have two buttons , the deafult theme should be light
  - one button with `Switch to Light` text
    - by default the theme should be 'light' and the button should be disabled
    - in light theme the counter should receive classname `light_theme` which will have the text color as black and background-color as white
    - onclicking the button an action should be dispatched to `handleTheme` with payload as `light`
  - another button with `Switch to Dark` text
    - initilay this button should be enabled
    - in dark theme the counter should receive classname `dark_theme` which will have the text color as white and background-color as black
    - onclicking the button an action should be dispatched to `handleTheme` with payload as `dark`

#### Light Mode

![](https://i.imgur.com/EMPhNnJ.png)

#### Dark mode

![](https://i.imgur.com/OtNH0Fy.png)

#### **Note**

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
