

import {fixThis,getRest,destructureMe} from '../index';

global.score = 1


describe('fixThis', function(){
  test('fixThis', function(){
    expect(fixThis()).toBe('Vivek is 36 yrs old.');
    global.score++;
  })
})

describe('getRest', function(){
  test('getRest', function(){
    expect(getRest()).toMatchObject([3, 4, 5, 6, 7, 8, 9, 10]);
    global.score++;
  })
})

describe('destructureMe', function(){
  test('destructureMe', function(){
    expect(destructureMe()).toMatchObject({username: 'vivek', sub1: 'JS', degree: 'BCA'});
    global.score++;
  })
})


afterAll(() => {
  console.log("Final Score is", global.score);
});
