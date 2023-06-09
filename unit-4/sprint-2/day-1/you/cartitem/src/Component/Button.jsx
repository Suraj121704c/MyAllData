import React from "react";

function Button () {
const [count , setCount ] = React.useState(0) 

function Increase(){
    setCount(count + 1)
}

function Decrese() {
    setCount(count - 1)
}

return (
    <div style={{display : "flex" , justifyContent:"space-between" , width:"100px"}}>
    <button style={{width:"40%", backgroundColor:"lightgreen" , color:"white"}} onClick={Increase}><h1>+</h1></button>
    <h1 style={{padding:"5px"}}>{count}</h1>
    <button style={{width:"40%" , backgroundColor:"skyblue" , color:"wheat"}} onClick={Decrese} disabled = {count <= 0} ><h1>-</h1></button>
    </div>
)
}

 export default Button; 