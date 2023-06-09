const user = [
  { firstName: "John", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "suraj", lastName: "singh", age: 32 },
  { firstName: "vikas", lastName: "saini", age: 26 },
];

// List of Full name

let users = user.map((e) => {
  return e.firstName + " " + e.lastName;
});

console.log(users);

// list of age in decreasing order according to quantity --> gonna use reduce cause the answer will be a single object;

let age = user.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] += acc[curr.age]++;
  } else {
    acc[curr.age] = 1;
  }
  return acc;
}, {});

console.log(age);

// we can also chain these functions together
let filter = user.filter((e ) => e.age < 30).map((e) => {
    return e.firstName
})

console.log(filter);

