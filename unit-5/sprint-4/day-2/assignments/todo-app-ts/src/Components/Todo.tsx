import React from "react";
import { Input } from "./interface";

interface Toogle extends Input {
  toogle: (id: number) => void;
}

function Todo({ id, title, description, status, toogle }: Toogle) {
  console.log(id,title,description,status)
  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{title}</h2>
      <p data-testid="todo-desc">{description}</p>
      {/* Based on the status value below checkbox will be checked/unchecked  */}
      <input
        data-testid="todo-status"
        type="checkbox"
        placeholder="status"
        onChange={() => toogle(id)}
        checked={status === true}
      />
    </div>
  );
}

export default Todo;
