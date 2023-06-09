import React from "react";
// used cause ref can't be passed from prop
import { forwardRef } from "react";

const Pin = forwardRef(({ maxChar, forOnChange, forOnBackSpace }, ref) => {
  const handleKeyUp = (e) => {
    // console.log(e)
    if (e.keyCode === 8) {
      // handleBackSpace keyStrokeS
      forOnBackSpace(e);
    } else {
      forOnChange(e);
    }
  };

  return <input maxLength={maxChar} ref={ref} onKeyUp={handleKeyUp} />;
});

export default Pin;
