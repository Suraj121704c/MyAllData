import TodoInput from "./TodoInput";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  postFailureAction,
  postRequestAction,
  postSuccessAction,
  todoRequestAction,
  todoRequestFailureAction,
  todoSuccessAction,
} from "../Redux/Todos/action";

const url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/todos`;

const Todos = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => {
    return {
      todos: store.todo.todos,
    };
  }, shallowEqual);

  // console.log(todos)

  const getData = () => {
    dispatch(todoRequestAction());
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        dispatch(todoSuccessAction(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(todoRequestFailureAction());
      });
  };

  React.useEffect(() => {
    getData();
  }, []);

  const handleAddTodo = (input) => {
    const newTodo = {
      title: input,
      staus: false,
    };
    dispatch(postRequestAction());
    axios
      .post(url, newTodo)
      .then((res) => {
        console.log(res.data);
        dispatch(postSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(postFailureAction());
        console.log(err);
      });
  };

  return (
    <div>
      {/* add TodoInput component here */}
      {/* map through the todos array and display the tasks */}
      <TodoInput addTodo={handleAddTodo} />
      {todos.length === 0 ? (<h1>Loading...</h1>) : null}
      {todos.length > 0 &&
        todos.map((el) => (
          <div key={el.id} data-testid="todos-wrapper">
            {el.title} --- {el.status ? "Completed" : "Pending"}
          </div>
        ))}
    </div>
  );
};

export default Todos;
