import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction,reduceAction } from "../Redux/Counter/action";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    // console.log(state.counter.counter);
    return state.counter.counter;
  });

  const handleAdd = () => {
    // dispatch an action
    dispatch(addAction(1));
  };
  const handleReduce = () => {
    dispatch(reduceAction(1));
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={handleAdd}>ADD</button>&nbsp;&nbsp;
      <button onClick={handleReduce}>REDUCE</button>
    </div>
  );
};

export default Counter;
