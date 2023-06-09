import React from "react";

const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h2 data-testid="counter-header" style={{ color: "brown" }}>
        Counter
      </h2>
      <h3 data-testid="count">{counter}</h3>
      <button data-testid="add-btn" onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button
        data-testid="subtract-btn"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <button data-testid="double-btn" onClick={() => setCounter(counter * 2)}>
        Double
      </button>
    </div>
  );
};

export default Counter;
