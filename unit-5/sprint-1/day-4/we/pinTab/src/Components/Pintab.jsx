import React, { useEffect, useRef, useState } from "react";
import Pin from "./pin";

import PropTypes from "prop-types";

const Pintab = ({ length, maxChar, setOtp }) => {
  const [pinTabLength] = useState(new Array(length).fill("0"));

  // to capture the value of the input tags
  const [pinTabValue] = useState(new Array(length).fill("0"));

  //we are initializing the ref with empty array cause due to map singal varaible is over-written with multiple refs

  const inputRef = useRef([]);

  const changeHandler = (e, index) => {
    // setting the value
    pinTabValue[index] = e.target.value;
    if (
      index < length - 1 &&
      //   inputRef.current[index].value.length === maxChar
      //  --> used if we wanna change only when two values were written
      e.target.value.length === maxChar
    ) {
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
    for (let i = 0; i < length * maxChar; i += maxChar) {
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

  //To keep the focus on the first input box in the begininig
  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  return (
    <div onPaste={handlePaste}>
      {pinTabLength.map((item, index) => {
        return (
          <Pin
            key={index}
            maxChar={maxChar}
            ref={(elem) => {
              inputRef.current[index] = elem;
            }}
            forOnChange={(e) => changeHandler(e, index)}
            forOnBackSpace={(e) => handelBackSpace(e, index)}
          />
        );
      })}
    </div>
  );
};

// with the help of prop type we are telling the user that he should have to enter values in number in strings

Pintab.propTypes = {
  length: PropTypes.number.isRequired,
  maxChar: PropTypes.number,
};

export default Pintab;
