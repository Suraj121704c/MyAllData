// memoise function
const memoise = (fun) => {
  const data = {};
  return (input) => {
    return data[input] || (data[input] = fun(input));
  };
};

// calculate the Nth fibbonacci number
const fib = memoise((n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
});
console.time("T1");
console.log(fib(60));
console.timeEnd("T1");
