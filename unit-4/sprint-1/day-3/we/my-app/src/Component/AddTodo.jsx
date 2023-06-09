import React from "react";

function AddTodo({handleAddTodo}) {
    const [text , setText] = React.useState("");
    const handleChange = (e) =>{
        setText(e.target.value)
    };
    const handleClick = () => {
        handleAddTodo(text)
        setText("")
    }
    return (
    
    <div>
    <input style={{width:"500px",height:"50px", fontSize:"30px",marginTop:"10px"}} placeholder="Enter Title" value={text} onChange={handleChange}/>
    {/* <p>{text}</p> */}
    <br />
    <button style={{width:"100px",height:"30px",marginTop:"10px" , backgroundColor:"purple",color:"white"}} onClick={handleClick}>ADD</button>
    </div>
    
    )
}
export default AddTodo;