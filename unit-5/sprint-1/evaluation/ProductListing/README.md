# react-usereducer-project-listing

## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

## Installation

- Use node version(LTS) >=14 and <17 (v16.16.0 is recommended)
- Don't change/override package.json
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install --engine-strict` to install node modules
  - `npm start`
  - `npm run test` -> to run the test

## Maximum Marks - 14

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the name input tag is present, with the 'name' attribute, and the user can type on it  - 1 mark
 ✅ Reducer initialstate hould match the initial state as per problem - 1 mark
 ✅ Reducer state should be updated on selecting the tech stack in the from - 1 mark
 ✅ Reducer state should be updated on selecting the assigned_to value in the from - 1 mark
 ✅ Reducer state should be updated on typing the name value in the from  - 1 mark
 ✅ should render No Project Found text initially - 1 mark
 ✅ should display added project details in a table - 2 marks
 ✅ should reset the fileds with intitial data after submitting the form - 1 mark
 ✅ clicking toggle button should toggle status from pending to completed - 1 mark
 ✅ clicking toggle button should toggle status from completed to reviewed - 1 mark
 ✅ toggle button should be disabled if the status is reviewed - 2 marks
```

## Folder Structure (Important Files)

```
>Src
├── >Components
│    └── AddProject.jsx
│    └── Navbar.jsx
│    └── ProjectList.jsx
│    └── ProjectRow.jsx
└── App.js
```

## Problem Statement

Create an dashboard where user can add projects with tech-stack and assigned person and toggle the status later on. The project list should be visible in tabular format on the same page.

#### useReducer

- The initial state will be as

```
  name: "",
  tech_stack: "",
  assigned_to: "",
  status: "pending",
```

- The following action types will be triggerd for corresponding values

```
"NAME"
"TECH_STACK"
"ASSIGNED_TO"
"STATUS"
"RESET" - (For resseting the state)
```

#### AddProject.jsx

- Create a form where user will enter all the project details
- Provide input box for project name with attribute `name="name"`,
- Provide select tag for tech_stack with the following options and corresponding values
- This select tag will have `data-testid="tech-stack-select"`

```
`Option`-`Value`
- React - react
- Node - node
- Java -java
- Python - python
```

- Provide select tag for assigned_to value with the following options and corresponding values
- This select tag will have `data-testid="assigned-to-select"`

```
`Option`-`Value`
- Nrupul - nrupul
- Albert - albert
- Aman - aman
```

- Provide a checkbox for current status, if checked status will be `completed` and if not it will be `pending`

- Provide a submit button for submitting the form.
- After submitting the form both the form and the reducer state should be reset.
- Store the project in an array using `useState` hook.

_Show the Project List on this page only using the `ProjectList` component_

<img width="1724" alt="Screenshot 2023-02-21 at 11 04 18 AM" src="https://user-images.githubusercontent.com/74458714/220256774-bf8c67e5-b4c1-41a5-841c-b8244ce2623e.png">

#### ProjectList.jsx

- If no project is present, show `No Project Found` with `data-testid="no-project-container"`
- Otherwise map through the project list and show in the tabular format.
- Table head row will contain

```
<th>S.no</th>
<th>Name</th>
<th>Tech Stack</th>
<th>Assigned To</th>
<th>Current Status</th>
<th>Toggle</th>
```

- Use `ProjectRow` component for table row.
- Provide a toggle button on every project to toggle the status.
- The status will change in the following manner:-

```
pending --> completed --> reviewed
```

- If the satatus is reviewd `disable` the toggle button.

- Table Structure :-

```
<table data-testid="project-container">
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>
```

<img width="1726" alt="Screenshot 2023-02-21 at 11 06 03 AM" src="https://user-images.githubusercontent.com/74458714/220256817-5875f20f-a75e-47cc-8e28-6cce1ddad4c0.png">

### Note : The submissions are invalid if `useReducer` hook is not used .

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them, may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.

### Genaral Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
