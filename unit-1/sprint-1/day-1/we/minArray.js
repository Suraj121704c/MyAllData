let arr = [1,2,3,4,5,6,7,8,9,10,11]
var min = Infinity;
for(let i = 0;i<arr.length;i++){
    if(min > arr[i]){
        min = arr[i]
    }
}
console.log(min)