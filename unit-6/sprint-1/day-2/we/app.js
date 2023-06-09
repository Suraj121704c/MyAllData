const add = (a, b) => {
  console.log(a + b);
};

const sub = (a, b) => {
  console.log(a - b);
};

const mul = (a, b) => {
  console.log(a * b);
};

const div = (a, b) => {
  console.log(a / b);
};

// if i am using array in exporting order matter so use object
module.exports = {add,sub,mul,div};
