let m = "masai"
let arr = []
for(let i = 0;i<m.length;i++){
    let bag = ""
    for(let j = i;j<m.length;j++){
        bag += m[j]
        arr.push(bag)
    }
}

console.log(arr)

let count = 0
let x = 0
for(let i = 0;i<arr.length;i++){
  let z = arr[i].length-1
  if(arr[i][x] === arr[i][z]){
    count++;
  }
}

console.log(count)