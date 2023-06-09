import React from "react";
import ProtoTypes from "prop-types";
import { forwardRef } from "react";

export const Pin = forwardRef(({ maxChar, forOnChange, forBackSpace }, ref) => {
  const handleKeyUp = (e) => {
    if (e.keyCode === 8) {
      forBackSpace(e);
    } else {
      forOnChange(e);
    }
  };

  return (
    <input
      data-testid="pin-input"
      maxLength={maxChar}
      ref={ref}
      onKeyUp={handleKeyUp}
    />
  );
});

// Check maxChar prop here
Pin.propTypes = {
  maxChar: ProtoTypes.number.isRequired,
};
