import React, { useMemo } from "react";
// memo is a methode not a hook
import { memo } from "react";

const heavyTask = (delay) => {
  const start = Date.now();
  while (Date.now() - start < delay) {
    continue;
  }
};

// const customCheck = (prev, curr) => {
//   return prev.status === curr.status && prev.title === curr.title;
// };
// or u can use useCallback

export const Todos = memo(
  ({ id, title, status, handleToogle, handleDelete }) => {
    useMemo(() => {
      heavyTask(200);
    }, []);
    // heavyTask(200);
    return (
      <div key={id}>
        <h5>
          {title} --- {status ? "Completed" : "Pending"}
        </h5>
        <button onClick={() => handleDelete(id)}>Delete</button> ---
        <button onClick={() => handleToogle(id)}>Toogle</button>
      </div>
    );
  }
  //   customCheck
);
