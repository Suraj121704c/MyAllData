import React from "react";
import { useSelector } from "react-redux";

const CounterValue = () => {
  const count = useSelector((state)=>{
    return state.counter.counter
  })
  
  return <div data-testid="counterValue">{count}</div>;
};

export default CounterValue;
