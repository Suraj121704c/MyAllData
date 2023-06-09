function isPrime(num) {
  let flag = true;
  if (num == 0 || num == 1) {
    flag = false;
  } else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        flag = false;
      }
    }
  }
  if (flag == false) {
    return false;
  } else {
    return true;
  }
}

for (let i = 0; i <= 100; i++) {
  let ans = isPrime(i);
  if (ans === true) {
    console.log(i, "is Prime");
  }
}
