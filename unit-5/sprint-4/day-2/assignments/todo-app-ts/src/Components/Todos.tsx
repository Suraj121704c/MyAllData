import React from "react";
import { Input } from "./interface";
import Todo from "./Todo";
function Todos({
  todo,
  toogle,
}: {
  todo: Input[];
  toogle: (id: number) => void;
}) {
  return (
    <div>
      {todo.map((el, i) => {
        return <Todo key={i} {...el} toogle={toogle} />;
      })}
    </div>
  );
}

export default Todos;
