import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import useClock from "./hooks/useClock";
import List1 from "./components/List1";
import List2 from "./components/List2";

function App() {
  const { hours, minutes, seconds } = useClock();
  return (
    <div className="App">
      {/* Clock */}
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
      <List1 list={[1,2,3]}/>
      <List2 list={[4,5]}/>
    </div>
  );
}

export default App;
