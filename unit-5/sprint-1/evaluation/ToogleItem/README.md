# React useToggleItems custom hook

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Initial value of state should be first element of array if position not passed  - 2 mark
 ✅ Initial status should be the element on passed position - 2 mark
 ✅ should toggle items in correct order - 3 mark
 ✅ On clicking toggle button status should toggle accordingly in UI - 2 mark
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

#### Problem

Create a useToggleItems custom hook with the following functionalities

1. It will accept two parameters

- initalValue which will be array of items e.g. `["A", "B", "C"]`
- Second parameter will be the position of initial item state.
  `useToggleItems(["A", "B", "C"], 2)`
- The second parameter will be optional, if not passed the default value will be zero.

2. It will return two values

- First value will be the curent state
- Second value will be function which will toggle the state.
  `const [state, toggleState] = useToggleItems(["A", "B", "C", "D], 1);`
- This function should not accept any parameters: `toggleState()`.

3. See the example to understand the flow of toggle.
   `const [state, toggleState] = useToggleItems(["A", "B", "C", "D], 1);`

- Initial state will be `B` as position is `1`
- Flow of toggle will be `B --> C --> D --> A --> B`

#### App.js

- In your app.js use this customHook with the follwing two parameters

```
- `["A", "B", "C"]`
- Position = `1`
```

- Provide a button with `data-testid="toggle"` which will toggle the state.
- Show the state in h1 tag with `data-testid="status"`

<img width="435" alt="Screenshot 2023-02-23 at 1 36 22 PM" src="https://user-images.githubusercontent.com/74458714/220857289-1ecb597f-07dd-4c17-bda7-29ee6098824c.png">


## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them, may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.

### Genaral Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
