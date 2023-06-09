import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleReduce = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h2 data-testId="counter">Counter : {count}</h2>
      <button className="add" onClick={handleAdd}>
        Add
      </button>
      <button className="reduce" onClick={handleReduce}>
        Reduce
      </button>
    </div>
  );
};
