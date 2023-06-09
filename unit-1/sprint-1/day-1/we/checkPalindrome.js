let count = 0;
let str = "naman";
for (let i = 0; i < str.length-1; i++) {
  for (let j = str.length-1; j >= 0 ; j--) {
    if (str[i] === str[j]) {
      count = 1;
    }
  }
}

if(count === 1) {
    console.log("Yes")
}else{
    console.log("No")
}

// OR

let str1 = "roahn"
let bag = ""
for(let i = str1.length-1; i >= 0 ; i--){
   bag += str[i]
}

if(bag === str1){
    console.log("Yes")
}else{
    console.log("No")
}