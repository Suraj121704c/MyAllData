let flag = true;
let num = 1;
if (num == 1 || num == 0) {
  console.log("Not prime");
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      flag = false;
    }
  }
  if (flag == true) {
    console.log("Prime");
  } else {
    console.log("Not prime");
  }
}
