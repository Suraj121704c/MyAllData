import React, { useEffect, useState } from "react";
import { Input } from "./interface";
import Todos from "./Todos";

const Add = () => {
  const getTodosFromLocaStorafe = (): Input[] => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      return JSON.parse(storedTodos);
    } else {
      return [];
    }
  };
  const [todo, setTodo] = useState<Input[]>(getTodosFromLocaStorafe());
  const [val, setVal] = useState<Input>({
    id: 1,
    title: "",
    description: "",
    status: false,
  });

  const HandleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setVal({ ...val, [name]: value, id: Math.random() });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodo([...todo, val]);
  };

  // console.log(todo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const ToogleStatus = (id: number) => {
    const data = todo.map((el) => {
      if (id === el.id) {
        return { ...el, status: !el.status };
      }
      return el;
    });
    setTodo(data);
  };

  return (
    <>
      <form data-testid="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          data-testid="title"
          type="text"
          id="title"
          onChange={(e) => HandleChange(e)}
          placeholder="enter todo"
        />
        <label>TextArea</label>
        <textarea
          data-testid="description"
          id="description"
          cols={30}
          rows={10}
          placeholder="textArea"
          onChange={(e) => HandleChange(e)}
        ></textarea>
        <input type="submit" value="Craete Todo" />
      </form>
      {<Todos todo={todo} toogle={ToogleStatus} />}
    </>
  );
};

export default Add;
