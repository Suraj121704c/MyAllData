

import {newObj} from '../problem1';
import {newObj as newObj2} from "../problem2";
import {massagedData} from "../problem3";

global.score = 1


describe('Problem 1 solution is wrong, newObj', function(){


  test('newObj', function(){
    expect(newObj).toMatchObject({
      Prateek: ["Rust", "Javascript"],
      Yogesh: ["HTML"],
      Nrupul: ["Java"],
    });
    global.score+=3;
  })
  
})



describe('Problem 2 solution is wrong, newObj', function(){
  test('newobj', function(){
    expect(newObj2).toMatchObject({
      Prateek: ["Rust", "Javascript"],
      Yogesh: ["HTML"],
      Nrupul: ["Java"],
    });
    global.score+=3;
  }) 
  
})

describe('Problem 3 solution is wrong, massagedData', function(){
  test('massagedData', function(){
    
    expect(massagedData[0]).toMatchObject({
      name: "Prateek", 
      marks: [
        {subject: 'Javascript', score: 90},
        {subject: 'HTML', score: 81},
        {subject: 'CSS', score: 80}
      ]
    })
    expect(massagedData[1]).toMatchObject({
      name: "Nrupul", 
      marks: [
        {subject: 'Java', score: 95},
        {subject: 'Python', score: 85}
      ]
    }) 
  global.score+=3;
  }) 
  
})




afterAll(() => {
  console.log("Final Score is", global.score);
});
