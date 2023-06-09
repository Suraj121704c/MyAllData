let x = [10,20,35,54,55]
let count = 0
let counting = 0
let avg = 0
for(let i = 0;i<x.length;i++) {
  count += x[i]
  counting += i
}

avg = count/counting
console.log(avg);