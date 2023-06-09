let lower = "abcdefghijklmnopqrstuvwxyz";
let obj = {};
let str = "masai";
for (let i = 0; i < str.length; i++) {
  if (obj[str[i]] == undefined) {
    obj[str[i]] = 1;
  } else {
    obj[str[i]]++;
  }
}
for (let i = 0; i < lower.length; i++) {
  for (let key in obj) {
    if (lower[i] == key) {
      console.log(key, "-", obj[key]);
    }
  }
}
