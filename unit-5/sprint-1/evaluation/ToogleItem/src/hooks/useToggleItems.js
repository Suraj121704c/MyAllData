import { useState } from "react";

const useToggleItems = (initialValue, n = 0) => {
  const [state, setState] = useState(n);
  const fun = () => {
    if (state >= initialValue.length - 1) {
      setState(0);
    } else {
      setState(state + 1);
    }
  };
  return [initialValue[state], fun];
};

export { useToggleItems };
