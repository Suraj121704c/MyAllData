import React from "react";

const TodoInput = ({ AddTodos }) => {
  const [formState, setFormState] = React.useState({
    title: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = value;
    setFormState({
      ...formState,
      [name]: val,
    });
  };

  const { title } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    AddTodos(formState);
  };

  return (
    <div>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={title}
          data-testid="todo-input"
          placeholder="add todo here..."
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" value="Add-Todo" data-testid="add-button">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
