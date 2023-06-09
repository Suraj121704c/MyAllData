import React from "react";
import { store } from "../Redux/store";
import { handleAddActionObj } from "../Redux/action";
import { handleReduceActionObj } from "../Redux/action";

const CounterButtons = () => {
  const { dispatch } = store;

  const addHandler = () => {
    dispatch(handleAddActionObj(1));
  };

  const reduceHandler = () => {
    dispatch(handleReduceActionObj(1));
  };

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={addHandler}>
        ADD
      </button>
      <button data-testid="reduceButton" onClick={reduceHandler}>
        REDUCE
      </button>
    </div>
  );
};

export default CounterButtons;
