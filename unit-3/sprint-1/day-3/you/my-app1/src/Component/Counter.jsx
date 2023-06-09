import React from "react";

function Counter () {
    const [counter , setCounter] = React.useState(0)

    return (
        <div className="Counter">
         <h1>Counter {counter}</h1>
         <button onClick={()=>setCounter(counter+1)}>ADD</button>
         <button onClick={()=>setCounter(counter-1)}>SUB</button>
        </div>
    )
}
export default Counter;