# React Custom Hooks

## Submission Instructions [Please note]

## Maximum Marks - 7

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Returned variable "ready" from the useTimeout hook should be false, by default  - 1 mark
 ✅ Returned variable "ready" from the useTimeout hook should be "true" after 5 seconds - 1 mark
 ✅ The text "After the timeout" should not be visible initially - 1 mark
 ✅ The div containing the text "After the timeout" should be visible after few seconds - 1 mark
 ✅ If online status is being shown in the UI  - 1 mark
 ✅ If offline status is being in the UI, when the internet is turned off - 1 mark
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

#### useTimeout hook

- complete the functionality of the useTimeout hook
- it should have a ready state
- it should accept a time in the hook
- once the time is over, the ready state should be true
- Show the "timeout-div" only if the ready state is true

```JavaScript
const { ready } = useTimeout( 5000 )  // 5 sec
// ready will be false initiallly
// after 5 seconds ready should be true
```

![Imgur](https://i.imgur.com/KSjddw9.png)
![Imgur](https://i.imgur.com/zRufR08.png)

#### useOnlineStatus hook

- complete the functionality of the useOnlineStatus hook
- it should return a isUserOnline state, based on the online status of the user
- if the user is online, `isUserOnline` should be true.
- if the user is offline, `isUserOnline` should be false.
- Show the online-status or offline-status divs based on this `isUserOnline` variable.

```JavaScript
const isUserOnline = useOnlineStatus()
```

**HINT**: To check user's online status: [Link](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)

![Imgur](https://i.imgur.com/dMF0RMS.png)
![Imgur](https://i.imgur.com/gkVY4pa.png)

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them, may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.

### Genaral Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
