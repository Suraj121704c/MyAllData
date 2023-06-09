import React, { useEffect, useState } from "react";
import { TodoInput } from "./TodoInput";
import { Todo } from "./constants";
import { getTodo } from "./api";
import { TodoItem } from "./TodoItem";

export const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [update,setUpdate] = useState<boolean>(false)

  const onAdd = () => {
    setUpdate((prev) => !prev)
  }

  useEffect(() => {
    getTodo().then((res) => {
      setTodos(res);
    });
  }, [update]);

  return (
    <div>
      <TodoInput update={onAdd}/>
      <h3>Todo List</h3>
      {todos.map((el) => {
        return <TodoItem key={el.id} {...el} update={onAdd}/>;
      })}
    </div>
  );
};
