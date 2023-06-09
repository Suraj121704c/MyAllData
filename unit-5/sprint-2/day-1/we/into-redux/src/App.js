import "./App.css";
import { addAction, reduceAction } from "./Components/redux/action";
import { store } from "./Components/redux/store";
import { useState } from "react";

function App() {
  const [render, setRender] = useState(0);
  const { getState, dispatch, subscribe } = store;

  subscribe(() => {
    console.log("State Changed : ", getState());
    setRender((prev) => prev + 1);
  });

  const addHandler = () => {
    dispatch(addAction());
  };
  const reducerHandler = () => {
    dispatch(reduceAction());
  };

  return (
    <div className="App">
      <h1>Counter : {getState().counter}</h1>
      <button onClick={addHandler}>ADD</button>
      <button onClick={reducerHandler}>REDUCE</button>
    </div>
  );
}

export default App;
