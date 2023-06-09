## React-Fetch-Posts Onclick

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should fetch post onclicking the button  - 2 marks
 ✅ should map through the response and populate the data - 3 mark
 ✅ should display title in h1 and body in h3 tags - 2 marks
 ✅ should display title in h1 and body in h3 tags with mock data - 2 marks

```

## Installation

- **you may use nvm use 14, if that does not work you can try 16 or later**

```
// install npm packages
npm install

// start application locally
npm run start

```

## Folder structure

- src

  - App.js
  - App.css
  - index.js
  - index.css
  - components
    - Post.jsx
    - post.css
  - cypress ( ignore the files under cypress)

- Please make sure you don't make any changes to files except for the files mentioned above.

### Description

- You have to build a react app where you have GET POSTS button onclicking it make a fetch request to the given url and display the posts as cards.

You are given two Components

### App.jsx

- manage the state of posts data here

### Post.jsx

- This components should accept data props which will have title and body

#### Steps

- In the App.js file there are a button with an id `get-posts-btn` and a div with an id `post-container`.

- When you click on the button you have to make a fetch request on this url:- `https://jsonplaceholder.typicode.com/posts`.

- When you get the data from the api request you have to loop over the data(The data is going to be an array of Objects) and For each Object you have to show the Post Component which is inside the Components folder(src/Components/Post.jsx).

- Inside the Post Component you will have a div with a className `post`.There you have a h1 tag and a h3 tag.

- Pass the `title` and `body` of the Posts as Props in the Post Component and show them in the h1 tag and h3 tag respectively.

![](https://i.imgur.com/x6sottb.png)

#### **Note**

- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
