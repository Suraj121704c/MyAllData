import React from "react";
import { useReducer } from "react";

const initState = {
    number : 0,
    input1 : "",
    input2 : "",
}

const act = { 
    action1 : "INCREMENT",
    action2 : "DECREMENT",
    Inputvalue1 : "CREDIT" ,
    Inputvalue2 : "DEBIT" 
}


function InCall(state,action){
   
   switch (action.type){
    case act.action1 : {
        return {
            ...state,
            number : Number(state.input1) + Number(state.number)
        }
    }
    case act.action2 : {
        return {
            ...state,
            number : Number(state.input2) - Number(state.number)
        }
    }
    case act.Inputvalue1 : {
        return {
            ...state,
            input1 : action.payload
        }
    }
    case act.Inputvalue2 : {
        return {
            ...state,
            input2 : action.payload
        }
    }
    default : {
        return state;
    }
   }

     
}

function Input(){
   const [state,dispatch] = useReducer(InCall,initState)
   
    return (
        <div>
        <input 
        type="number"
        placeholder="Enter Value" 
        value={state.input1} 
        onChange={(e)=>dispatch({type : act.Inputvalue1 , payload : e.target.value})}
        />
        <br />
        <br />
        <button 
        onClick={()=> dispatch({type : act.action1})}
        >ADD</button>
        <br />
        <br />
        <br />
        <br />

{/*  */}

        <input 
        type="number"
        placeholder="Enter Value" 
        value={state.input2} 
        onChange={(e)=>dispatch({type : act.Inputvalue2 , payload : e.target.value})}
        />
        <br />
        <br />
        <button
        onClick={()=> dispatch({type : act.action2})}>REDUCE</button>
        <br />
        <br />
        <h1>{state.number}</h1>
        <br />
        <br />
        </div>
    )
}
export default Input;