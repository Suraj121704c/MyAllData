## Redux Basic Counter

#### Tags

Redux, dispatch actions, stiore

## Submission Instructions [Please note]

### Maximum Marks - 8

- The Submission should not contain spaces, for example `/rct-101 folder/eval` will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅If CounterValue component and CounterButton components are present inside Counter component- 1 mark
 ✅ If actions are returning the correct action object - 1 marks
 ✅ If the reducer func is returning the correct counter state/data for Add - 1 marks
 ✅ If the reducer func is returning the correct counter state/data for Reduce - 1 marks
 ✅ If the default value of 10 is showing in the UI- 1 marks
 ✅ If the counter value on the UI increases, when clicked on the Add button - 1 mark
 ✅ If the counter value on the UI decreases, when clicked on the Reduce button - 1mark
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

### Problem Description 

- use redux to create a store and write in the following files
  - action.js ( action object creators )
  - reducer.js ( reducer function )
  - store.js ( store )
- Create these components
- Counter.jsx
  - CounterValue.jsx ( contains the counter value, retrieve it from store ).
  - CounterButtons.jsx ( dispatch the actions for incrementing and decrementing counter value )
- Create a forceUpdate function, that will help us in re-rendering the React component, to show the updated counter value for the Redux store
- attach the `forceUpdate` to the store.subscribe method

```
const [state, setState ] = useState(0);
const forceUpdate = ( ) => setState(prev=>prev+1)
```

- on clicking the add and reduce the values should be updated in the counter

![](https://i.imgur.com/0lRS0ho.png)

#### **Note**

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
