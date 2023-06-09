import React from "react";
import { store } from "../Redux/store";
import { useState } from "react";

const CounterValue = () => {
  const [state, setState] = useState(0);
  const storeData = store
  const counter = storeData.getState().counter; //get the counter value from the Redux store
  const { subscribe } = store;


  subscribe(() => {
    // console.log(`state Changed : `, getState());
    setState((prev) => prev + 1);
  });

  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
