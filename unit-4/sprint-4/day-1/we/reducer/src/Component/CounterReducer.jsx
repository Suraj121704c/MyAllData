import { useContext, useReducer } from "react";
import { AppCountext } from "../Context/AppContext";

// const initialState = 0;

//action needs to have a key called type
// or use {type} in place of action.type
// function reducerCallBack(state, { type, payload = 1}) {
//   switch (type) {
//     case "INCREMENT": {
//       return state + payload;
//     }
//     case "DECREMENT": {
//       return state - payload;
//     }
//     case "RESET": {
//       return 0;
//     }
//     default: {
//       return state;
//     }
//   }
// }

// console.log(reducerCallBack(0, { type: "INCREMENT" }));

function CounterReducer() {
  // const [state, dispatch] = useReducer(reducerCallBack, initialState);
  // console.log(state);

  // Destructuing state and taking out count
  const [{count} , dispatch] = useContext(AppCountext)

  const handleAdd = () => {
    const incrementAction = { type: "INCREMENT" };
    dispatch(incrementAction);
  };
  const handleReduce = () => {
    const decrementAction = { type: "DECREMENT" };
    dispatch(decrementAction);
  };

  const handleReset = () => {
    const decrementAction = { type: "RESET" };
    dispatch(decrementAction);
  };
  return (
    <div>
      <h1>REDUCER</h1>
      <h1>{count}</h1>
      <button onClick={handleAdd}>ADD</button>
      <button onClick={handleReset}>RESET</button>
      <button onClick={handleReduce}>REDUCE</button>
      <button onClick={() => dispatch({type : "INCREMENT" , payload : 120})}>ADD 120</button>
      <button onClick={() => dispatch({type : "INCREMENT" , payload : 200})}>ADD 200</button>
    </div>
  );
}
export default CounterReducer;
