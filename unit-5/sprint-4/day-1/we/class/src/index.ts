// console.log("Hello")

let n : number = 10;
n = 20
// n="singh" --> error

let s : string = "ABC"
// s=10
s = "COD"

let s1 : string = "S1" 
let s2 : number = 10
let res : string = `${s1}` + `${s2}`

// boolean
let b : boolean = false;

// Array
let arr : number[] = [1,2,3]

let arrStr : string[] = ["a","b","c"]

let arrConst : Array<number> = [1,2,3]


// obj
let c : {
    id:number,
    name : string,
    address : string
} = {
    id  : 1,
    name : "Suraj",
    address : "1 street"
}


let obj : user  = {
    name : "Aniket",
    id : 23,
    score : 5,
    address :  "1 street"
}
type user= {name : string;id : number ;score : number;address : string}

// union of number and string
let e : number | string = 2
e = "a"


// intersection
type u = {name :string,id:number,age:number }
type developer ={name :string,role : string}
let ia : u & developer = {
    name : "abc",
    id : 1,
    age : 24,
    role : "Frontend"
}


// function 
function sum (a : number ,b : number){
    return a + b;
}
sum(2,1)
// sum(2,"1") ---> errors