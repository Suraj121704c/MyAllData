// Enums(Read it and try to implement)

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
// values will go 1,2,3,4

enum DD {
    Up,
    Down,
    Left,
    Right
}
// values will go 0,1,2,3

//using --> 
let direction = Direction.Left;


// enum Sting
enum DDD {
    Up= "UP",
    Down = "Down",
    Left = "Left",
    Right = "Right"
}


// tuple
type user2 = [number , string, number, string]

let ar1 : [string,number,number,string] = ["Ankit" , 23,5,"1 street"]
let ar2 : user2  = [24,"Ankit",5,"1 street"]


// generic functions --> bascially used to define a function value

function getInfo <Type>(value : Type) {
    return value
}
getInfo<string>("Ankit")
getInfo<number>(2345)
getInfo<boolean>(false)


// interface --> inherit properties from the other interface
interface person {
    id : number,
    name : string,
}
interface person2 extends person{
    address : string
    role : "FrontEnd" | "BackEnd"
}
let object : person2 = {
    id : 2,
    name : "Aman",
    address : "abc street",
    role : "FrontEnd"
}


// class --->
class car {
    name : string;
    brand : string
    constructor(name : string, brand : string){
        this.name = name;
        this.brand = brand;
    }
}
let eat = new car("Thar" , "Mahindra")


class Suv extends car {
    sunRoof : boolean
    constructor(name:string , brand : string , sunRoof : boolean){
     super(name,brand);
     this.sunRoof = sunRoof;
    }
}