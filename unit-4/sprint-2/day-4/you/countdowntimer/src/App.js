import Timer from './Component/Timer.jsx';
import './App.css';
import React from 'react';

function App() {
  const [showTimer,setShowTimer] = React.useState(true);

  return (
    <div className="App">
     {showTimer && <Timer />}
     <button onClick={() => setShowTimer(!showTimer)}>Toogle Timer</button>

    </div>
  );
}

export default App;
