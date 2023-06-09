import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    addTodo(input);
    setInput("");
  };
  return (
    <div style={{marginTop : "20px" , marginBottom : "20px"}}>
      <h1>Add Todo Here</h1>
      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      &nbsp;&nbsp;&nbsp;
      <button onClick={handleAddTodo}>add-todo</button>
      <hr />
    </div>
  );
};

export default TodoInput;
