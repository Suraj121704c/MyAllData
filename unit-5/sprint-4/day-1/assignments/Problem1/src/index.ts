// type name string
let a : string = "Suraj"

let age : number = 19

let isFetching : boolean = true

let arr : number[] = [1,2,3]

let arrString : string[] = ["a","b","c"]


// tupple
type tupple = [string,boolean]

let a1 : tupple = ["Suraj" , true]


// enum
// User, SuperUser, Admin, SuperAdmin

enum c {
    User = "USER",
    SuperUser = "SUPERUSER",
    Admin = "ADMIN",
    SuperAdmin = "SUPERADMIN"
}


function d (a : number , b : number) : number {
    return a + b;
}
d(1,2)

function f (a : number , b : number) : number {
    return a / b
} 
f(5,2)

function print (a : string) {
    console.log("Name" , a)
}
print("suraj")