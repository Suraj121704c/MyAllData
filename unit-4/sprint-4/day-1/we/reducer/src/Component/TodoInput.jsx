import React, { useState } from "react";

const TodoInput = ({handleAdd}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      handleAdd(value);
      setValue("");
    }
  };

  return <form onSubmit={handleSubmit}>
    <input 
    type="text"
    value={value}
    placeholder="add-task-here"
    onChange={(e) => setValue(e.target.value)} 
    />
    &nbsp;
    &nbsp;
    &nbsp;
    <button type="submit" disabled={!value}>ADD</button>
  </form>;
};

export default TodoInput;
