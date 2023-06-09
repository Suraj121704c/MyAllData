console.log("Hello");
var a: string= "Hello";
a="Bye"


var b :number = 1;
b=1223

let c:boolean = true
c=false;

// Union Operator 
let d:null | string = null;
d="hello";
d=null

// any --> solution for everthing
let e:any = "hello"
e=true
e=2
e=null
e=undefined;
e();


// string Literals
let f:'foo'|"bar" ="foo"
f="bar"
// f="Bar"