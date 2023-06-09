import { useRef } from "react";

const useThrottler = (func, delay) => {
  let { current: wait } = useRef(false);
  return (movie) => {
    if (wait) return;
    wait = true;
    func(movie);
    setTimeout(() => {
      wait = false;
    }, delay);
  };
};

export default useThrottler;
