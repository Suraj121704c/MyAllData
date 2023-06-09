import React, { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("counter");
    if (storedCount !== null) {
      setCount(Number(storedCount));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", count.toString());
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement5 = () => {
    setCount(count + 5);
  };

  const handleDecrement5 = () => {
    setCount(count - 5);
  };

  return (
    <div className="App">
      <h1 data-testid="counter">{count}</h1>
      <button data-testid="increment" onClick={handleIncrement}>
        Increment
      </button>
      <button data-testid="decrement" onClick={handleDecrement}>
        Decrement
      </button>
      <button data-testid="increment5" onClick={handleIncrement5}>
        Increment 5 times
      </button>
      <button data-testid="decrement5" onClick={handleDecrement5}>
        Decrement 5 times
      </button>
    </div>
  );
}

export default App;
