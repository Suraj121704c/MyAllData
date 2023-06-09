let s = "masai";
let arr = []
for(let i = 0;i<s.length;i++) {
  let bag = ""
  for (let j = i;j < s.length;j++) {
    bag += s[j]
    arr.push(bag)
  }
}
console.log(arr)