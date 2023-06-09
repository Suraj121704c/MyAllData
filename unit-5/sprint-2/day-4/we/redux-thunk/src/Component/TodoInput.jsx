import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, getTodo } from "../Redux/action.js";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    console.log(text);
    // addTodo(text,dispatch);
    dispatch(addTodo(text)).then(() => dispatch(getTodo));
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
