import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const [list, setList] = useState(initialArray);
  const appendStart = (val: number) => {
    list.unshift(val);
  };
  const appendEnd = (val: number) => {
    list.push(val);
  };

  const popEnd = () => {
    list.pop();
  };

  const popStart = () => {
    list.shift();
  };

  const clear = () => {
    setList([]);
  };
  const reset = () => {
    setList(initialArray);
  };

  return { list, appendEnd, appendStart, reset, clear, popEnd, popStart };
};

export default useNumberList;
