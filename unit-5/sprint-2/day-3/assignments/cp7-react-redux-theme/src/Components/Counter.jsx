import React from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";
import { useSelector } from "react-redux";
import './counter.css'

const Counter = () => {
  const theme = useSelector((state) => {
    return state.theme.theme;
  });
  console.log(theme)
  return (
    // the following div classname should be chnaged accrding to the theme
    <div
      data-testid="counter"
      className={theme === "light" ? "light_theme" : "dark_theme"}
    >
      <h1>Counter</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue />

      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons />
    </div>
  );
};

export default Counter;
