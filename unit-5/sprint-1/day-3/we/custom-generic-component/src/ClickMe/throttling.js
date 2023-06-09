import React from "react";
import { useRef } from "react";

const useThrottling = (func, delay) => {
  let { current: wait } = useRef(false);
  return () => {
    if (wait) return;
    func();
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
};

export default useThrottling;
