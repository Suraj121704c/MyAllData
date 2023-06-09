// object Literal
let user : {
    id: number,
    name : string
} ={
    id : 1,
    name : "Ritesh"
}
// user = {lastName : "suraj"} --> error 
user.name = "Suraj" // okay

// Record
let questions : Record<string,boolean>={
    isMarried : false,
    isEmployee : true,
    isIndian : true,
    // name : "Suraj" -- > cause it is an string
}
questions.isHuman = true; // okay
// questions.name = "Ritesh" -- > wrong cause it is a string
