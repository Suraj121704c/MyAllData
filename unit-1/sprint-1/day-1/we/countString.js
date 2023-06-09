let a = "Masai School is the best Online School in the world"

let count = 0
for(let i = 0; i < a.length;i++){
  if(a[i] === " "){
    count++
  }
}
// for decreasing the last element
if(a.length == " "){
    console.log(0)
}else{
    console.log(count + 1)
}
