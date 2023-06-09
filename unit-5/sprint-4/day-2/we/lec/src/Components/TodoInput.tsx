import React, { useState } from "react";
import { postTodo } from "./api";

type TodoInputProp = {
  update: () => void;
};

export const TodoInput = ({ update }: TodoInputProp) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postTodo(title);
    update();
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={handleChange}
        />
        <button type="submit">add-todo</button>
      </form>
    </div>
  );
};
