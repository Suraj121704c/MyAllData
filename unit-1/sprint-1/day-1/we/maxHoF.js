const arr = [2,3,4,5,2,1]

let max = arr.reduce((acc,curr) => {
  if(curr > acc) {
    acc = curr;
  }
  return acc;
} , 0)

console.log(max);