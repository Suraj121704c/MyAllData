import React, { useReducer, useState } from "react";

function reducer(todos, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, { text: action.text, completed: false }];
    case "TOGGLE_TODO":
      return todos.map((todo, index) =>
        index === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    case "CLEAR_COMPLETED":
      return todos.filter((todo) => !todo.completed);
    default:
      return todos;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (inputValue) {
      dispatch({ type: "ADD_TODO", text: inputValue });
      setInputValue("");
    }
  };

  const handleToggleTodo = (index) => {
    dispatch({ type: "TOGGLE_TODO", index });
  };

  const handleClearCompleted = () => {
    dispatch({ type: "CLEAR_COMPLETED" });
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => handleToggleTodo(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
}

export default TodoApp;