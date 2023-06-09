import React from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = React.useState("");

  const handleAddTodo = () => {
    addTodo(input);
    setInput("");
  };
  return (
    <div>
      <input
        type="text"
        data-testid="todo-input"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button data-testid="add-button" onClick={handleAddTodo}>
        add-todo
      </button>
    </div>
  );
};

export default TodoInput;
