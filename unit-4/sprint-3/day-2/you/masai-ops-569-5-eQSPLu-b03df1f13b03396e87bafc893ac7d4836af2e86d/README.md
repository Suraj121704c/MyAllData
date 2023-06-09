### Problem - Routing Basics

Please read the problem fully before attempting

## Submission Instructions [Please note]

## Maximum Marks - 10 marks

```
 navbar tests:
     ✅ onclicking home link the url should be changed - 1mark
     ✅ onclicking about link the url should be changed - 1mark
     ✅ onclicking contact link the url should be changed - 1mark
     ✅ onclicking services link the url should be changed - 1mark
     ✅ onclicking login link the url should be changed - 1mark
  tests for App:
     ✅ onclicking home link Home Page text should be visible  - 1mark
     ✅ onclicking about link About Page text should be visible - 1mark
     ✅ onclicking contact link Contact Page text should be visible  - 1mark
     ✅ onclicking services link Services Page text should be visible  - 1mark
     ✅ onclicking login link  Login Page text should be visible - 1mark



```

## Installation

- you have to use any node version from 14 to 16
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.

1. Libraries need to be installed by yourself if not present in package.json

### Not following the above instructions will lead your test cases to fail

## Extract from this zip folder:

- You can use the codesandbox link if you are not able to get it working on your system
- https://codesandbox.io/s/routing-i-problem-template-forked-rqhxlx
  - If you are using codesandbox for working on the application
  - Then make sure you are downloading the project, and then adding the updates to your github repo
  - and submitting the link to where the project is ( the link should open the folder with /src, /public and package.json )
- there are test cases that you need to run to pass the project
- make sure you `npm run install`
- you can install any node version you want, don't add package-lock.json
- you can run `npm run test`,

## Description

- [Video](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-08-12/rec_423103.mp4)
- Create a Navbar Component with the following Links
- When you click on these links, you should display different the corresponding components.

- There are two components
- `Navbar.jsx`
  - you need to create all your Links here
  - Links
    - `/` - Home
    - `/contact` - Contact
    - `/about-us` - About
    - `/services` - Services
    - `/login` - Login
- App.jsx
  - this needs to contain all the Routes for your application
  - The following should be the text in each of the page. You can use an h1 tag
  - Home Page - `/`
  - Contact Page - `/contact`
  - About Page - `/about-us`
  - Services Page - `/services`
  - Login Page - `/login`

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
