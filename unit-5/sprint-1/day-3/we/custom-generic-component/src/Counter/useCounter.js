import { useState } from "react";

const useCounter = (initialValue, payload) => {
  const [state, setState] = useState(initialValue);

  let fun = () => {
    setState((prev) => prev + payload);
  };

  return [state, fun];
};

export default useCounter;
