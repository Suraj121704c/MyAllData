import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import axios from "axios";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
  postRequestAction,
  postSuccessAction,
  todoRequestAction,
  todoRequestFailureAction,
  todoRequestSuccessAction,
} from "../redux/action";
import { Link } from "react-router-dom";
const url = "http://localhost:3001/todos";

const Todos = () => {
  const dispatch = useDispatch();

  const { todos, isLoading } = useSelector((store) => {
    // console.log(store.todos);
    return {
      todos: store.todos,
      isLoading: store.isLoading,
    };
  }, shallowEqual);
  // shallowEqual avoids rerendering

  // getAction
  const getData = () => {
    dispatch(todoRequestAction());
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data);
        dispatch(todoRequestSuccessAction(res.data));
      })
      .catch((err) => {
        dispatch(todoRequestFailureAction());
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // Add Action
  const handleAddTodo = (input) => {
    // post request
    // dispatch -- Request Action
    const newTodo = {
      title: input,
      staus: false,
    };
    dispatch(postRequestAction());
    axios
      .post(url, newTodo)
      .then((res) => {
        // dispatch -- Success Action
        dispatch(postSuccessAction(res.data));
        // console.log(res);
      })
      .catch((err) => {
        // dispatch -- Failure Action
        dispatch(postSuccessAction());
        console.log(err);
      });
  };

  // Delete Action
  const handleDeleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then((res) => {
        // console.log(res);
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // toogle
  const toogleTodo = (id, status) => {
    axios
      .patch(`http://localhost:3001/todos/${id}`, { status: !status })
      .then((res) => {
        console.log(res);
        getData();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 style={{ marginBottom: "30px" }}>It is Our Home</h1>
      <hr />
      <TodoInput addTodo={handleAddTodo} />
      <h1>Todo List</h1>
      {isLoading && <h1>Loading...</h1>}
      {todos.length > 0 &&
        todos.map((el) => (
          <div
            key={el.id}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            {/* {el.title} --- {el.status ? "Completed" : "Pending"} */}
            <p>{el.id}</p>
            <p style={{ marginTop: "10px" }}>{el.title}</p>
            <p style={{ marginTop: "10px" }}>
              {el.status ? "Completd" : "Pending"}
            </p>
            <button
              style={{ background: "none", marginTop: "10px" }}
              onClick={() => {
                toogleTodo(el.id, el.status);
              }}
            >
              {el.status ? "Mark As Pending" : "Mark As Completed"}
            </button>
            <Link to={`/${el.id}`}>
              <button style={{ marginTop: "10px" }}>Edit</button>
            </Link>
            <button
              style={{ marginTop: "10px" }}
              onClick={() => handleDeleteTodo(el.id)}
            >
              Deleted Todo
            </button>
          </div>
        ))}
    </div>
  );
};

export default Todos;
