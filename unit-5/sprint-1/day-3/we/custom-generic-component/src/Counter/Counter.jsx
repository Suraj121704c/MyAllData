import React from "react";
import useCounter from "./useCounter";

const Counter = () => {
  const [count, setCount] = useCounter(0, 1);
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={setCount}>Add</button>
    </div>
  );
};

export default Counter;
