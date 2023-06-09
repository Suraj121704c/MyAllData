import React from "react";

function Timer() {

    const [count , setCount] = React.useState(60)

    React.useEffect(()=>{
     const IntervalId = setInterval(()=>{
        setCount((prevCount)=>{
            if(prevCount === 1){
                clearInterval(IntervalId)
                return 0;
            }
            return prevCount - 1
        })
     },1000)

     const cleanup = () => {
        clearInterval(IntervalId)
     }
     return cleanup;
    },[])

   return (
    <h1>Timer : {count}</h1>
   )

}

export default Timer;