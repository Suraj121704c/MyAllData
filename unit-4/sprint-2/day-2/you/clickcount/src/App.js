import './App.css';
import React from "react";

function App() {
  const [count,setCount] = React.useState(0)

  React.useEffect(() => {
    document.title =`you clicked ${count} times`;
  },[count]);
  //!SECTION --> We have puted count on the array is due to dependence

  return (
    <div className="App">
      <h1>clicked {count}'times</h1>
      <button onClick={() => setCount(count+1)}>Click</button>
    </div>
  );
}

export default App;
