let str = "abc";

let alpha = "abcdefghijklmnopqrstuvwxyz";

let obj = {};
for (let i = 0; i < alpha.length; i++) {
  if (obj[alpha[i]] === undefined) {
    obj[alpha[i]] = i + 30;
  }
}

let sum = 0
for (let i = 0;i<str.length;i++) {
    sum += obj[str[i]]
}


console.log(sum);