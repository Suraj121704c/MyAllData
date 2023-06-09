var alpha = "abcdefghijklmnopqrstuvwxyz"

let obj = {}

for(let i = 0; i<alpha.length;i++){
    if(obj[alpha[i]] == undefined){
        obj[alpha[i]] = i + 30
    }
}

for(let key in obj){
   console.log(key + "-" + obj[key])
}