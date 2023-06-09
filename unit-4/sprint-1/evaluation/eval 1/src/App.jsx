import React from "react";

function App() {

  const [count,setCount] =  React.useState(0)

  const handleCount = (val) => {
    setCount(count + val)
    Prime()
  }
  
  const handleReset = () => {
    setCount(0)
  }

  const Prime = (count) => {
    let x = 0;
    if(count === 0){
      return false
    }
    for(let i = 1;i<=count;i++){
      if(count % i === 0){x++}
    }
    if(x===2){
      return true
    }
    else{
      return false
    }
  }
 
  return (
    <div style={{textAlign:"center"}}>
      <h1>Welcome to Counter 2.0</h1>
      <div>
        <button 
        disabled={count === 0}
        onClick={() => handleCount(-1)}
        data-testid="minusonebtn">-1</button>
        <button 
        onClick={() => handleCount(1)}
        data-testid="plusonebtn" placeholder="+1">+1</button>
      <div>
        <button 
        onClick={handleReset}
        data-testid="resetbtn">Reset Count</button>
      </div>
      </div>
      <span data-testid="counter">{count}</span>
      <div>
        <span data-testid="odd-or-even">
         This Number is : {count % 2 === 0 ? "Even" : "Odd"}
          </span>
          <br />
        <span data-testid="is-prime">
          Prime Number :
        {Prime(count) ? "true" : "false"}
        </span>
      </div>
    </div>
  );

}

export default App;

