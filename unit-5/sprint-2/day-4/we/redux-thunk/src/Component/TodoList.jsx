import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TodoInput from "./TodoInput";
import { getTodo } from "../Redux/action.js";

const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => {
    // console.log(state);
    return state.todos;
  });

  useEffect(() => {
    // getTodo(dispatch);
    dispatch(getTodo)
  }, []);

  return (
    <div>
      <h1>ADD TODO HERE</h1>
      {<TodoInput />}
      <h1>TODO LIST</h1>
      {todo.length > 0 &&
        todo.map((el) => {
          return (
            <div key={el.id}>
              {el.title} --- {el.status ? "Completed" : "Pending"}
            </div>
          );
        })}
    </div>
  );
};

export default TodoList;
