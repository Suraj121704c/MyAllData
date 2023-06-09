import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 5);
  };

  const handleReduce = () => {
    setCount((prev) => prev - 5);
  };

  return (
    <div>
      <h1 data-testId="counter">Counter : {count}</h1>
      <button onClick={handleAdd} data-testId="add-button">
        ADD
      </button>
      <button onClick={handleReduce} data-testId="reduce-button">
        REDUCE
      </button>
    </div>
  );
};
