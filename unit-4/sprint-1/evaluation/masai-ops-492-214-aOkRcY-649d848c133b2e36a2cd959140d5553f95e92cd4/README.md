# react-masai-courses

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Title component should render the heading - 1 mark
 ✅ UserCard component should accept props - 2 marks
 ✅ follow button should work correctly - 3 marks
 ✅ Courses component should render the list properly - 3 marks

```

## Installation

- Use only node version 16
- please make sure you do not push package-lock.json
- You can use the [codesandbox link](https://codesandbox.io/s/rct101-eval1-b20-l11sc5), but please note the test cases will not work on codesandbox ( as codesandbox will not support the version for testing )
- If you are using codesandbox, you still need to download the project add to your masai-course repo submit the github link on the cp.masaichool.com platform

```
npm install

// run locally
npm run start

// test locally
npm run test

```

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time

# Problem

## Description

- **Please do a default export of the all the components**

You have 3 components

**Title.jsx**

- You need to create a component called Title. This component will need to have a `H1` tag, and have its text content as `Users Display`
- add `color:teal` to the title .

**UserCard.jsx**

- You need to create a UserCard component which accepts the following properties / props
  - name
  - avatar
  - posts
  - followers
  - address
- You need to create an image tag, with src as `avatar`, and the alternate text is same as `name`.
- display the other recieved props as following
  - name in `h2` tag with data-testid = `user_name`
    - For example this how you can add the data-testid `<h2 data-testid="user_name">{name}</h2>`
  - address in `p` tag with data-testid = `user_address`
  - posts in `p` tag with data-testid = `user_posts`
  - followers `p` tag with data-testid = `user_followers`
  - `Posts` heading in `h3` tag (refer image)
  - `Followers` heading in `h3` tag (refer image)
- the component should have a button with a default text as `follow`
- on clicking the button text toggles between `follow` and `following`
- manage the above using state management in react and when clicking the button

  ![](https://i.imgur.com/69OK75n.png)

**Courses.jsx**

- You need to create Courses component which renderes the following data

  - It should have two types of courses `Full Time Courses` and `Part Time Courses`
  - Type of courses should be in `h2` tag
  - Each course will be an ordered list(ol)
  - the eligibility and duration must be an unorderd list(ul) under each course.
  - refer the below image for the course details

![](https://i.imgur.com/v7bft5g.png)

## Guidelines

- https://codesandbox.io/s/rct101-eval1-b20-l11sc5
- you need to fork from it
- Once forked, you can build the features as per the requirement
- If you want to see if the application is working as per test cases, go to the Tests section
- ![Screenshot 2022-09-05 at 12.46.22 AM.png](https://i.imgur.com/xO4nDew.png)
- ![Screenshot 2022-09-05 at 12.46.39 AM.png](https://i.imgur.com/EA5iupf.png)
- You need to download the project from the codesandbox
- ![Screenshot 2022-09-05 at 12.48.13 AM.png](https://i.imgur.com/tayvlR0.png)
- You need to extract the zip file
- The entire project ( including package.json, src, public etc ) should be submitted
- You need to submit the link to this folder which contains the files package.json
- The above is very important, please do this carefully, we will be running the project from this folder, if we do not find the required files, you will not get any score
- ![Screenshot 2022-09-05 at 12.42.40 AM.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-09-05/Screenshot%202022-09-05%20at%2012.42.40%20AM_978564.png)
