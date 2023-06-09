import React, { useRef, useState, useEffect } from "react";
import { Pin } from "./Pin";
import ProtoTypes from "prop-types";

export const PinTab = ({ length, maxChar, setOtp }) => {
  const [pintTabLength] = useState(new Array(length).fill("0"));

  const [pinTabValue] = React.useState(new Array(length).fill("0"));

  const inputRef = useRef([]);

  const changeHandler = (e, index) => {
    pinTabValue[index] = e.target.value;
    if (index < length - 1 && e.target.value.length === maxChar) {
      inputRef.current[index + 1].focus();
    }
    setOtp(pinTabValue.join(""));
  };

  const handelBackSpace = (e, index) => {
    pinTabValue[index] = e.target.value;
    if (index > 0 && e.target.value.length === 0) {
      inputRef.current[index - 1].focus();
    }
    setOtp(pinTabValue.join(""));
  };

  const handlePaste = (e) => {
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => (index = index < maxChar * length));

    let values = [];
    for (let i = 0; i < length * maxChar; i++) {
      let temp = "";
      for (let j = i; j < maxChar + i; j++) {
        temp += data[j];
      }
      values.push(temp);
    }
    values.forEach((character, index) => {
      pinTabValue[index] = character;
      inputRef.current[index].value = character;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
    setOtp(pinTabValue.join(""));
  };

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  return (
    <div data-testid="pin-tab" onPaste={handlePaste}>
      {pintTabLength.map((item, index) => {
        return (
          <Pin
            key={index}
            maxChar={maxChar}
            ref={(elem) => {
              inputRef.current[index] = elem;
            }}
            forOnChange={(e) => changeHandler(e, index)}
            forBackSpace={(e) => handelBackSpace(e, index)}
          />
        );
      })}
    </div>
  );
};

// Check length and maxChar props here
PinTab.propTypes = {
  length: ProtoTypes.number.isRequired,
  maxChar: ProtoTypes.number,
};
