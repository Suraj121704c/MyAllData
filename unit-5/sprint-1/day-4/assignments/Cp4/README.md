# OTP Generic Component

## Submission Instructions [Please note]

## Maximum Marks - 14

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should render the PinTab component in the UI  - 1 mark
 ✅ PinTab should have Pin component as a child - 1 mark
 ✅ For PinTab length should be a required prop - 1 mark
 ✅ For PinTab length and maxChar should be a number - 1 mark
 ✅ Pin Component should accept maxChar as a prop and it should be required  - 1 mark
 ✅ Pin component should not accept text with length greater than the maxChar prop - 1 mark
 ✅ Typing the OTP 123456 should be typed in correct input boxes - 2 marks
 ✅ Pressing backspace should move user to previous box after removing the value - 2 marks
 ✅ On pasting OTP: 123456 should go to respective input boxes - 3 marks
```

## Boilerplate

- src
  - `__tests__`
  - Components
    - Pin.jsx
    - PinTab.jsx
  - App.js

## Description

#### OTP Component

Create a generic OTP component. The number of input boxes and lenght of text per input box can be controlled.

- Pin.jsx

  - It will accept `maxChar` as a prop which will be a `number` and should be `required`
  - It will return an input box with `data-testid` as `pin-input`
  - The input box will allow text with maximum length equal to `maxChar`

- PinTab.jsx

  - It will accept `length` and `maxChar` as props, and its value should be `number`
  - It should throw warning/error for any value for `length` and `maxChar` other than `number`
  - The `length` should be a `required` prop.
  - It will have `Pin` components as children, whose count will be equal to `length` value.
  - User should be able to type in the first input box and it should move the user to the next input box
  - Same should happen with deletion (pressing `backspace`), should move the user to the previous input box
  - User can paste, but not more than the length of input boxes and number must be equally divided into all input fields.

  ```
  Example:-

  - If user pastes "123456" and there are only 5 input boxes
  - Only 1,2,3,4,5 will be pasted to the boxes
  ```

![](https://user-images.githubusercontent.com/10437171/70847884-f9d35f00-1e69-11ea-8152-1c70eda12137.gif)

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.

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
