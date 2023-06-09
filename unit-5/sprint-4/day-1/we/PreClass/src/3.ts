let arr1 : number[]= [1,2,3]
// arr1.push("Hello") --> not a number
arr1.push(2)

let arr2 : Array<number | string> = [1,2,3];
arr2.push(4)
arr2.push("Hello");

let arr3 : string[] = ["A" , "B" , "C"];
arr3.push("D")
// arr3.push(1) ---> not a string

let arr4: readonly string[] = ["A","B","C"]
// arr4.push("D") ---> can't be pushed due to readonly

