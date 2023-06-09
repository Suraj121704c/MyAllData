import React from "react";
import useForm from "./useForm";

// useForm as our own reducer

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD": {
      return { ...state, counter: state.counter + payload };
    }
    default: {
      return state;
    }
  }
};

const initialState = {
  counter: 0,
  todos: [],
  email: "",
  password: "",
};

const Form = () => {
  const [data, dispatch] = useForm(reducer, initialState);

  return (
    <div>
      <h3>Counter : {data.counter}</h3>
      <button onClick={() => dispatch({ type: "ADD", payload: 1 })}>add</button>
    </div>
  );
};

export default Form;
