import React from "react";
import { useDispatch } from "react-redux";
import { addTodo, getTodos } from "../Redux/action";

//make a POST request (by dispatching the function), to save the data in db.json
//make a GET request (by dispatching the function), if the post request is successful, by chaining them together
const TodoInput = () => {
  const [text, setText] = React.useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addTodo(text)).then(() => dispatch(getTodos));
    setText("");
    // console.log(text)
  };

  return (
    <div>
      <input
        data-testid="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button data-testid="todo-add-btn" onClick={handleAdd}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
