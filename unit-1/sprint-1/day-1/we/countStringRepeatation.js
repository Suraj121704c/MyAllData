var alpha = "masai"

let obj = {}

for(let i = 0; i < alpha.length;i++) {
    if(obj[alpha[i]] === undefined){
        obj[alpha[i]] = 1
    }else{
        obj[alpha[i]]++
    }
}

console.log(obj)