import React, { useRef } from "react";

const useDebounce = (func, delay) => {
  let { current: id } = useRef();
  return () => {
    id && clearTimeout(id);
    id = setTimeout(() => {
      func();
    }, delay);
  };
};

export default useDebounce;
