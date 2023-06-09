import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  list: number[];
};
const List1 = (props: List1Props) => {
  const { list, appendEnd, appendStart, reset, clear, popEnd, popStart } =
    useNumberList(props.list);

  const [val, setVal] = useState(0);

  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">List 1</h3>
      {/* Iterate List and wrap the element div below inside */}

      {list.map((e, i) => (
        <div data-testid="list1-element" key={i}>
          {e}
        </div>
      ))}

      <input
        data-testid="list1-input"
        placeholder="enter-data"
        onChange={(e) => setVal(Number(e.target.value))}
      />
      <button
        data-testid="list1-btn-append-start"
        onClick={() => appendStart(val)}
      >
        Append start
      </button>
      <button data-testid="list1-btn-pop-end" onClick={popEnd}>
        Pop End
      </button>
      <button data-testid="list1-btn-clear" onClick={clear}>
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default List1;
