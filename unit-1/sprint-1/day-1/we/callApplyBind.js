
// Call
function greet1(name) {
  console.log(`Hello, ${name}! I'm ${this.title}.`);
}

const person1 = { title: "Mr." };

greet1.call(person1, "John");
// Output: Hello, John! I'm Mr

// Apply
function greet2(name) {
  console.log(`Hello, ${name}! I'm ${this.title}.`);
}

const person2 = { title: "Mr." };
const args = ["John"];

greet2.apply(person2, args);
// Output: Hello, John! I'm Mr.


// bind
function greet3(name) {
  console.log(`Hello, ${name}! I'm ${this.title}.`);
}

const person3 = { title: "Mr." };
const boundGreet = greet3.bind(person3);

boundGreet("John");
// Output: Hello, John! I'm Mr.
