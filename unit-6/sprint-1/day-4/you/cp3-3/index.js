const fs = require("fs");

// complete the following fubctions

function isNumber(num) {
  if (typeof num === "number") {
    fs.writeFileSync("./test.txt", "it is a Number.");
  } else {
    fs.writeFileSync("./test.txt", "it is Not a Number.");
  }
}

function isStr(str) {
  let a = 1
  if (str - a) {
    fs.writeFileSync("./test.txt", "it is Not a String.");
  } else {
    fs.writeFileSync("./test.txt", "it is a String.");
  }
}

function isArray(arr) {
  if (typeof arr === "object" && Array.isArray(arr) && arr !== null) {
    fs.writeFileSync("./test.txt", "it is a Array.");
  } else {
    fs.writeFileSync("./test.txt", "it is Not a Array.");
  }
}

function isObj(obj) {
  if (typeof obj === "object" && obj !== null && !Array.isArray(obj)) {
    fs.writeFileSync("./test.txt", "this is a object.");
  } else {
    fs.writeFileSync("./test.txt", "this is not a object.");
  }
}

function cls() {
  fs.unlinkSync("./test.txt");
}

// Export All the functions
module.exports = { isNumber, isArray, isStr, isObj, cls };
