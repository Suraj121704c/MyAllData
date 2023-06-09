import React from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import Header from "./Header";

const Todod = () => {
  const [todos, SetTodos] = React.useState([]);

  const handleAddTodo = (text) => {
    const newItem = {
      title: text,
      status: false,
      id: Date.now() + text + Math.random(),
    };
    const todoListAfterNewItemAddition = [...todos, newItem];
    console.log(todoListAfterNewItemAddition);
    SetTodos(todoListAfterNewItemAddition);
  };

  const handleToogle = (id) => {
    const todosAfterUpdation = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo
    );
    SetTodos(todosAfterUpdation);
  };

  const handleDelete = (id) => {
    const todosAfterDelete = todos.filter((todo) => todo.id !== id);
    SetTodos(todosAfterDelete);
  };

  return (
    <div className="Header">
      <Header />
      <div className="Gp">
        <AddTodo handleAddTodo={handleAddTodo} />
      </div>
      <div className="todoList">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            status={todo.status}
            id={todo.id}
            handleToogle={handleToogle}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Todod;
