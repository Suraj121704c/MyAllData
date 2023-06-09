import { useReducer } from "react"

const initalState = 500;

function reducerCallBack(state,action){
    switch(action.type){
      case "INCREMENT_AMOUNT" : {
          return state + 2000
      }
      default : {
          return state;
      }
    }   
}
function UseReduceIn(){
  const [state,dispatch] = useReducer(reducerCallBack,initalState)

  const handleAdd = () => {
    const incrementAction = {type : "INCREMENT_AMOUNT"}
    dispatch(incrementAction)
  };
  return (
    <div>
        <h1>REDUCER2</h1>
        <h1>{state}</h1>
        <button onClick={handleAdd}>ADD</button>
    </div>
  )
}
export default UseReduceIn