import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../Redux/action";

// get all the todos from the redux store, and map them inside this component
const TodoList = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => {
    return state.todos;
  });

  React.useEffect(() => {
    dispatch(getTodos);
  }, []);

  console.log(todo);

  return (
    <div data-testid="todo-list-wrapper">
        {todo.length > 0 &&
          todo.map((el) => (
            <div key={el.id} data-testid="single-todo">
              {el.title} --- {el.status ? "True" : "False"}
            </div>
          ))}
    </div>
  );
};

export default TodoList;
