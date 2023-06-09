const { useState } = require("react");

function CounterState() {
  const [value, setValue] = useState(0);

  const handleAdd = () => {
    setValue(value + 1);
  };
  const handleReduce = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReduce}>REDUCE</button>
    </div>
  );
}

export { CounterState };
