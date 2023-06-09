import React from "react";

function AddTodo({handleAddTodo}){
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
    <input placeholder="Add Todo" value={text} onChange={handleChange}/>
    <button onClick={handleClick}>ADD</button>
    </div>
    )
}
export default AddTodo;