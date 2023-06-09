// index.js

//  import the crypto module
const crypto = require("crypto");

//  get a commands using process.argv
const operation = process.argv[2];
// console.log(operation)

// complete the  function

switch (operation) {
  case "add": {
    console.log(+process.argv[3] + +process.argv[4]);
    break;
  }
  case "sub": {
    console.log(+process.argv[3] - +process.argv[4]);
    break;
  }
  case "mult": {
    console.log(+process.argv[3] * process.argv[4]);
    break;
  }
  case "divide": {
    console.log(+process.argv[3] / +process.argv[4]);
    break;
  }
  case "sin": {
    console.log(Math.sin(+process.argv[3]));
    break;
  }
  case "cos": {
    console.log(Math.cos(+process.argv[3]));
    break;
  }
  case "tan": {
    console.log(Math.tan(+process.argv[3]));
    break;
  }
  case "random": {
    if (!process.argv[3]) {
      console.log("Provide length for random number generation.");
      return;
    }
    let number = crypto.randomBytes(+process.argv[3]);
    console.log(number.toString("binary"));
    break;
  }
  default:
    console.log("Invalid operation");
}
