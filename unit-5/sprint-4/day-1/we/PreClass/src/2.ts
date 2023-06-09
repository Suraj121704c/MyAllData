// string here represents the datatype of the answer 
const add = (a:number,b:number) : string =>{
    return `${a+b}`;
}

add(1,2)
// add(1,"Hello") --> not okey
// add(1) --> not okay
add(1,3)


// void means not returning anything
const log = (message : string) : void => {
    console.log(message)
}
log("Hello")