import React from "react";
import { Todo } from "./constants";
import { toogleTodo } from "./api";

interface todoItemProps extends Todo {
  update: () => void;
}

export const TodoItem = ({ title, status, id, update }: todoItemProps) => {
  const handleToogle = () => {
    toogleTodo(status, id);
    update();
  };

  return (
    <div>
      <h3>
        Title : {title} --- status : {status ? "True" : "False"}
      </h3>
      <button onClick={handleToogle}>toogle-here</button>
    </div>
  );
};
