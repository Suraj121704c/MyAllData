import React, { useState } from "react";
import { Todos } from "./Todos";
import { useCallback } from "react";

const initialState = [
  { id: 1, title: "Task-1", status: false },
  { id: 2, title: "Task-2", status: false },
  { id: 3, title: "Task-3", status: false },
];

export const TodoInput = () => {
  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");

  //   useCallback(() => {}, []);

  const handleAdd = () => {
    const newTodo = {
      id: Date.now(),
      title,
      status: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
  };

  //   usecallback to avoid rendering
  const handleToogle = useCallback((id) => {
    setTodos((prev) => {
      return prev.map((el) => {
        return el.id === id ? { ...el, status: !el.status } : el;
      });
    });
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  }, []);

  return (
    <div>
      <h3>Add Todo</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      &nbsp;&nbsp;
      <button onClick={handleAdd}>Add Todo</button>
      <br />
      <h3>Todo List</h3>
      {todos.map((el) => (
        <Todos
          key={el.id}
          {...el}
          handleDelete={handleDelete}
          handleToogle={handleToogle}
        />
      ))}
    </div>
  );
};
