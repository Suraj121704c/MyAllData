import React from "react";
import TodoInput from "./TodoInput";

// Reducer Function
const todosReducerFn = (state, { type, payload }) => {
  switch (type) {
    case "ADD": {
      state = [
        ...state,
        {
          id: Date.now(),
          value: payload,
          isCompleted: false,
        },
      ];
      return state;
    }
    case "TOOGLE": {

      const newState = state.map((todo) => {
        if (todo.id === payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      return newState;
    }
    case "DELETE": {
      const newState = state.filter((todo) => todo.id !== payload);
      return newState;
    }
    default: {
      return state;
    }
  }
};

const TodoApp = () => {
  const [todos, dispatch] = React.useReducer(todosReducerFn, []);

  // const handleAdd = (value) => {
  //     setTodos([...todos,{
  //         id:Date.now(),
  //         value,
  //         isCompleted : false
  //     }])
  // };

  // const updateStaus = (id) => {
  //     setTodos(
  //         todos.map((todo)=>{
  //             if(todo.id === id){
  //                 todo.isCompleted = !todo.isCompleted
  //             }
  //             return todo;
  //         })
  //     )
  // }

  // const handleDelete = (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id))
  // }

  return (
    <div>
      <h1>TODO</h1>
      <TodoInput
        handleAdd={(value) => dispatch({ type: "ADD", payload: value })}
      />
      {todos.map((todo) => (
        <div key={todo.id}>
          <span
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            {todo.value}
          </span>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => dispatch({ type: "TOOGLE", payload: todo.id })}
          >
            TOOGLE
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            onClick={() => dispatch({ type: "DELETE", payload: todo.id })}
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoApp;
