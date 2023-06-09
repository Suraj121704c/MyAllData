import React from "react";
import CounterValue from "./CounterValue";
import CounterButtons from "./CounterButtons";

const Counter = () => {
  return (
    <div data-testid="counter">
      <h1>Counter Application</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
      <CounterValue />
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
      <CounterButtons />
    </div>
  );
};

export default Counter;
