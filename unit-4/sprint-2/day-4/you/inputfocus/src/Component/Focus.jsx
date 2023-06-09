import React from "react";

function Focus(){
    const [inputVal,setInputVal] = React.useState("");
    const inputRef = React.useRef(null);

    const handleFoucs = () => {
        inputRef.current.focus();
    }
  return (
    <>
     <input 
     ref={inputRef}
     type="text"
     placeholder="add something"
     value = {inputVal}
     onChange={(e)=>setInputVal(e.target.value)} 
     />
     <button onClick={handleFoucs}>ADD</button>
     </>
  )
}
export default Focus;