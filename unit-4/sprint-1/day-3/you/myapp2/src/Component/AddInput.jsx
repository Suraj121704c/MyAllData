import React from "react";

function AddInput() {
  const [text, setText] = React.useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  function Removetxt() {
    setText("");
  }

  return (
    <>
      <input
        placeholder="Add Input"
        value={text}
        onChange={handleChange}
      ></input>
      <h2>{text}</h2>
      <button onClick={Removetxt}>CLEAR</button>
    </>
  );
}
export default AddInput;
