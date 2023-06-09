import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h2 data-testId="counter">Counter : {count}</h2>
      <button data-testId="add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Counter;
