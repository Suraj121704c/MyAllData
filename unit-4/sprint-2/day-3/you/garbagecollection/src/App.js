import Timer from './Component/Timer.jsx';
import React from "react"
import './App.css';

function App() {
  const [showTimer , setShowTimer] = React.useState(false)

  return (
    <div className="App">
     
    
  { showTimer && <Timer />}   
  <button onClick={()=>setShowTimer(!showTimer)}>
    {showTimer ? "Hide Timer" : "Show Timer"}
  </button>
    </div>
  );
}

export default App;
