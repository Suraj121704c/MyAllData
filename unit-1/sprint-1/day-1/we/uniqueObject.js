let names = ["raj" , "raj" , "rohan" , "naresh" , "naresh"]

let unique = {}
 
for(let i = 0;i<names.length;i++){
    unique[names[i]] = 1
}

console.log(unique)