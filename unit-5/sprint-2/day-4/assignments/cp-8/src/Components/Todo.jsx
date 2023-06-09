import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

// just write the fetch/get the todos logic when the component mounts, in this component
const Todo = () => {
  return (
    <div>
      <h1>Todos</h1>
      {/* Import TodoInput component here */}
      <TodoInput />
      {/* Import TodoList component here */}
      <TodoList />
    </div>
  );
};

export default Todo;
