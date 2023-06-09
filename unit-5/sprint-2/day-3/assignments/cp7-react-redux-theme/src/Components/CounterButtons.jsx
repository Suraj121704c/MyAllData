import React from "react";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";

const CounterButtons = () => {
  const dispatch = useDispatch();

  const handleSum = () => {
    dispatch(handleAdd(1));
  };

  const handleMinus = () => {
    dispatch(handleReduce(1));
  };

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleSum}>
        ADD
      </button>
      <button data-testid="reduceButton" onClick={handleMinus}>
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
