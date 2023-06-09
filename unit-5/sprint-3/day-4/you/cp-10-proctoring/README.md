## React-PerformanceOptimisation-Addpost

## Maximum Marks - 15

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub
- Rename the boilerplate folder name(there shouldn't be any spaces) once downloaded.
  follow this naming convention <block>-<sprint>-<eval> for e.g., b22-s1-c1 should be the folder name

## Rubrics

```
✅ Able to submit the app - 1 mark ( minimum score )
✅ Checking whether timer is getting incremented for every 1 second  2 marks
✅ Checking whether user able to add posts or not and updating the DOM in real time 2 marks
✅ should re-render the component when props are change 2 marks
✅ Checking whether each post component is having background color or not 2 marks
✅ check performance optimisation was done for the webapplication or not-1 2 marks
✅ check performance optimisation was done for the webapplication or not-2 2 marks
✅  Should not re render the component when same props are passed 2 marks
```

## Some Rules to follow:-

- Before writing a single line of code please read the problem statement very carefully.
- Don't change the already given ids or classes.
- If you don't follow these rules you might not get any marks even if you do everything correctly.

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- run `npm install --engine-strict` to install the node modules
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path

#### Understanding Component structure

- components
  -Post.jsx
- App.js

#### Problem Statement

- Create a React app. And it should have the following functionalities.
- on the App component, keep a timer with a state on that which will increment every one second.
- the timer state should be in the app component.
- There are two input tags(input and textarea) to accept a post title and body.
- each post can be saved with the following details

```
{
   id:
   title:
   body:
   verifyPost: false
}
```

- on clicking on add a post, create a new post and show it with the help of the Post component.
- Each Post should have a verifyPost key as false by default.
- user can toggle the verifyPost state with a button. (The default text content of the button is "Verify" and when clicked on it its value changes to "Verified" and vice-versa)
- Each post should have a random(Hint:- Use Math.random() to achieve it) background color(it should change on every render and give the backgroundColor to the div with data-testid="post").
- you can use React.memo, useCallback, useMemo to apply memoisation.
- the background color of the component should change only when that particular component re-renders.

#### Before Performance Optimisation
![Beforeoptimisation](https://user-images.githubusercontent.com/74458714/225591109-6e16e823-e5ca-4da3-ad22-025bb5073629.gif)



- Here whenever the timer state gets updated, the child components of the App (Post), also get updated even though there is no change in its props.
- As we are giving random background color, it changes whenever the component re-renders

#### After Performance Optimisation

![AfterOptimisation](https://user-images.githubusercontent.com/74458714/225591145-bd9ca3ef-8ff7-44e6-8418-779fa0d1073c.gif)


- Here whenever the timer state gets updated, the child components of App, will not get re-rendered until their props get changed.
- Here the child component re-renders when its props change. If we click on verify button, its props get changed and the component re-renders and the background color changes. (If there are 3 posts, only the post component which has its props changed will re-render other child components will not re-render until their own props are changed)

#### **Note**

- Make sure you use only the given components and don't create new Components, files, or folders of your own. Changing the component name, and file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, and removal of this will lead to a low score.
- Also make sure to cross-check all the spellings and Cases of Texts.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
