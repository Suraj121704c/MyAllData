## Reach Ten 
A 2 Player Mini Game - Where the person to Reach 10 wins.


## Tags
react, useState, conditional rendering 

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to make submission - 1 mark(default)
 ✅ should render App and have basic structure - 1 mark
 ✅ should change player turn on clicks- 1 mark
 ✅ should increment the score when clicked -  1 marks
 ✅ should show winner correctly (player 2) -  2 marks
 ✅ should show winner correctly (player 1) -  1marks
 ✅ should disable the add-two-btn at 9 and add-one-btn at 10 -  2marks
 ✅ should reset the game when reset button is clicked - 1 mark


```

## Installation


- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- You can use the [codesandbox link](https://codesandbox.io/s/rct101-reach-ten-2veqi8?file=/src/index.js), but please note the test cases will not work on codesandbox ( as codesandbox will not support the version for testing )
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


## Description

### Create a 2 Player Game where the player to reach 10 wins.

- **Demo Link**: https://reach10.netlify.app/

### Game Rules:
* It's a 2 Player Mini Game
* The game will have a counter with initital value zero.
* Each player will have alternate turns.
* In each turn player will have a choice to increment the counter by either 1 or 2.
* Player to reach 10 wins.
* Player 1 will go first by default.

### Example of a Game
* Counter : 0
* Player 1 : Counter + 1 => 1
* Player 2 : Counter + 2 => 3
* Player 1: Counter + 2 => 5
* Player 2: Counter + 1 => 6
* Player 1: Counter + 1 => 7
* Player 2: Counter + 2 => 9
* Player 1: Counter + 1 => 10 `(Player 1 Wins)`
‌
### Tasks / Functionalities to Implement
1. The app will have a counter with initital value set to `0`
2. The app will also have a container that displays which player's turn it is. 
    * It will display either `Player 1` or `Player 2`. 
    * By default `Player 1` should go first.
3. The app will have two buttons to increment the counter. 
    * One button will increment the counter by 1 (+1 button). 
    * The other will increment the counter by 2 (+2 button).
    * Player in each turn can chose to increment the counter by either 1 or 2.
4. As each player will have alternate turns, each time the incement buttons are clicked, player turn should change. 
5. When counter value is 9 the +2 button should be disabled and when theres a winner (counter value is 10) the +1 button should also be disabled.
6. The app will also have one `winner-container` that displays the winner when counter reaches 10. 
    * The `winner-container` should display `Still To Be Decided` by default. 
    * When counter reaches 10 it should display either `Player 1` or `Player 2` 
7. The app will have a reset game button. 
    * This button will reset all values to default and reset the game. 
    ![](https://i.imgur.com/gyR8qhR.png)

**Note** 
- Make sure you use only the given components and dont create new Components, files, folders of your own. Changing component name, file/folder structures might result in giving you zero marks
- Do Not Remove `data-testid="xxxx"` from anywhere, these are used by testing tools to test your code, removal of this will lead to low score.
- Also make sure to cross check all the spellings and Case of Texts. for example, if you write `player_1`,`PLAYER 1` or `Player One` instead of `Player 1` you will not get any marks. 

- https://codesandbox.io/s/rct101-reach-ten-2veqi8?file=/src/index.js
- you need to fork from it
- Once forked, you can build the features as per the requirement
- If you want to see if the application is working as per test cases, go to the Tests section
- ![Screenshot 2022-09-05 at 12.46.22 AM.png](https://i.imgur.com/g4JfTlq.png)
- ![Screenshot 2022-09-05 at 12.46.39 AM.png](https://i.imgur.com/WBexEvV.png)
- You need to download the project from the codesandbox
- You need to extract the zip file
- The entire project ( including package.json, src, public etc ) should be submitted
- You need to submit the link to this folder which contains the files package.json
- The above is very important, please do this carefully, we will be running the project from this folder, if we do not find the required files, you will not get any score
- ![Screenshot 2022-09-05 at 12.42.40 AM.png](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-09-05/Screenshot%202022-09-05%20at%2012.42.40%20AM_978564.png)
#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
